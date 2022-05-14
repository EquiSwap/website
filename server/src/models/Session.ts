import { BaseEntity } from './BaseEntity';
import { Entity, OneToOne, Property, Unique } from '@mikro-orm/core';
import { User } from './User';

import { randomBytes as secureRandomBytes } from 'crypto';

@Entity()
export class Session extends BaseEntity {

    /**
     * The user that the session belongs to.
     */
    @OneToOne({ onDelete: 'cascade' })
    user!: User;

    /**
     * The user's IP address when they made the request to log in.
     */
    @Property()
    ipAddress?: string;

    /**
     * The session token passed to the client to authenticate with
     * the server.
     */
    @Property({ columnType: 'varchar(684)' })
    @Unique()
    token: string = secureRandomBytes(512).toString('base64');

    /**
     * The date/time the session was started.
     */
    @Property()
    started: Date = new Date();

    constructor(fields: {
        user: User;
        ipAddress?: string;
    }) {
        super();

        this.user = fields.user;
        if (fields.ipAddress) this.ipAddress = fields.ipAddress;
    }

}
