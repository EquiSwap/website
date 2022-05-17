/* eslint-disable no-console */

import Cinnamon from '@apollosoftwarexyz/cinnamon';
import { IncomingMessage } from 'http';
import { testAuthorization } from '../middlewares/Authorization';
import { User } from '../models/User';
import { EntityManager } from '@mikro-orm/core';
import { DatabaseModuleStub } from '@apollosoftwarexyz/cinnamon/dist/modules/_stubs/database';
import { EquiSocket } from '../vendor';
import {ChatMessage} from '../models/ChatMessage';

export class WebSocketHandler {

    private framework: Cinnamon;
    private connectedSockets: EquiSocket[];

    constructor(framework: Cinnamon) {
        this.framework = framework;
        this.connectedSockets = [];
    }

    get database () {
        return this.framework.getModule<DatabaseModuleStub>(DatabaseModuleStub.prototype);
    }

    public async routeHandler(socket: EquiSocket, request: IncomingMessage) {
        let currentUser: User | undefined = undefined;
        let entityManager: EntityManager | undefined = this.database.em.fork();

        const userRepo = entityManager!.getRepository(User);
        const messageRepo = entityManager!.getRepository(ChatMessage);

        // Set a 5-second timeout for authentication.
        const authTimeout = setTimeout(() => {
            if (!currentUser) {
                socket.send(JSON.stringify({ success: false, message: 'Authentication timed out.' }));
                socket.close();
            }
        }, 5000);

        try {
            currentUser = await testAuthorization(entityManager, request.headers.authorization);
            socket.user = currentUser;
            this.connectedSockets.push(socket);
        } catch(ex) {
            socket.close();
            return;
        }

        socket.on('message', async (message: string) => {
            let data: any;
            try { data = JSON.parse(message); } catch (ex) { return; }

            if (data.command === 'auth') {
                if (currentUser) return;

                currentUser = await testAuthorization(entityManager, data.token);
                if (!currentUser) {
                    socket.send(JSON.stringify({ command: data.command, success: false, message: 'Authentication failed.' }));
                    socket.close();
                } else {
                    socket.send(JSON.stringify({ command: data.command, success: true, message: 'You have been authenticated.' }));
                    socket.user = currentUser;
                }
                clearTimeout(authTimeout);
                return;
            }

            if (!currentUser) {
                socket.send(JSON.stringify({ command: data.command, success: false, message: 'You are not authenticated.' }));
                return;
            }

            switch (data.command) {
                // Chat message
                case 'message': {
                    const message = new ChatMessage(data.payload.message, {
                        type: data.payload.type ?? 'chat',
                        author: currentUser!,
                        target: entityManager!.getReference(User, data.to)!
                    });
                    await messageRepo.persistAndFlush(message);

                    // Clear typing status.
                    {
                        let foundSocket;
                        if (socket.typing?.to && (foundSocket = this.connectedSockets.find(socket => socket.user != null && socket.user.id === socket.typing!.to))) {
                            foundSocket.send(JSON.stringify({
                                command: 'typing',
                                from: socket.user!.id,
                                until: 0
                            }));
                        }
                    }
                    socket.typing = undefined;

                    for (const socket of this.connectedSockets) {
                        // If the socket has a user involved in the conversation, relay the message object.
                        if (socket.user && (socket.user.id === currentUser!.id || socket.user.id === data.to)) {
                            socket.send(JSON.stringify({
                                command: data.command,
                                payload: {
                                    id: message.id,
                                    author: message.author.id,
                                    target: message.target.id,
                                    message: message.message,
                                },
                                notification: {
                                    author: message.author.smartName
                                }
                            }));
                        }
                    }

                    break;
                }
                case 'typing': {
                    // if there is another three seconds of 'typing time' left for this user, do not send
                    // the typing payload.
                    if (socket.typing && (socket.typing.until <= (new Date().getTime()) + 3000)) {
                        return;
                    }

                    // check if the user they are typing to is online.
                    let foundSocket;
                    if ((foundSocket = this.connectedSockets.find(socket => socket.user != null && socket.user?.id === data.to))) {
                        // if this was to signal they've stopped typing, reflect as such
                        if (data.clear) {
                            foundSocket.send(JSON.stringify({
                                command: 'typing',
                                from: socket.user!.id,
                                until: 0
                            }));
                            return;
                        }

                        // if they are, mark as typing to that user for 5 seconds.
                        socket.typing = {
                            until: (new Date().getTime()) + 5000,
                            to: data.to
                        };

                        // then signal to that user that this current user is typing.
                        foundSocket.send(JSON.stringify({
                            command: data.command,
                            from: socket.user!.id,
                            until: socket.typing.until
                        }));
                    }
                    break;
                }
                default:
                    break;
            }
        });

        socket.on('close', async () => {
            await entityManager?.flush();
            entityManager = undefined;
            currentUser = undefined;
        });
    }

}
