import {TrackedBaseEntity} from './BaseEntity';
import {Entity, Enum, ManyToOne, Property} from '@mikro-orm/core';
import {User} from './User';

export enum MessageType {
    CHAT = 'chat',
    PRODUCT = 'product'
}

@Entity({ tableName: 'messages' })
export class ChatMessage extends TrackedBaseEntity {

    @Enum(() => MessageType)
    type!: MessageType;

    @Property({ type: 'text', nullable: false })
    message!: string;

    @ManyToOne({ nullable: false })
    author!: User;

    @ManyToOne({ nullable: false })
    target!: User;

    constructor(message: string, props: {
        type?: MessageType;
        author: User;
        target: User;
    }) {
        super();

        if (!props.type) props.type = MessageType.CHAT;
        this.type = props.type;
        this.author = props.author;
        this.target = props.target;
        this.message = message;
    }

}
