let socket: WebSocket | undefined;
let listenerCount: number = 0;

export function setSocket(newSocket: WebSocket | undefined) {
    socket = newSocket;
}

export function closeSocket() {
    if (socket) {
        socket.close();
    }
}

export function sendChatMessage(to: string, message: string) {
    socket?.send(JSON.stringify({
        command: 'message',
        to,
        payload: {
            type: 'chat',
            message
        }
    }));
}

export function addSocketListener(listener: any, shadow: boolean = false) {
    socket?.addEventListener('message', listener);
    if (!shadow) listenerCount++;
}

export function removeSocketListener(listener: any, shadow: boolean = false) {
    socket?.removeEventListener('message', listener);
    if (listenerCount > 0 && !shadow) listenerCount--;
}

export function hasSocketListener() {
    return listenerCount > 0;
}
