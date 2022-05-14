import {Entity, Property} from '@mikro-orm/core';
import { TrackedBaseEntity } from './BaseEntity';

@Entity({ tableName: 'users' })
export class User extends TrackedBaseEntity {

    @Property({ length: 255 })
    email!: string;

    @Property()
    username!: string;

    @Property({ columnType: 'text', nullable: true })
    displayName?: string;

    @Property({ columnType: 'text', nullable: true })
    profilePicture?: string;

    @Property({ columnType: 'date', hidden: true })
    dateOfBirth!: string;

    @Property({ length: 255, hidden: true })
    password!: string;

    constructor(fields: {
        username: string;
        email: string;
        displayName: string;
        dateOfBirth: string;
        passwordHash: string;
        profilePicture?: string;
    }) {
        super();
        this.username = fields.username;
        this.email = fields.email;
        this.dateOfBirth = fields.dateOfBirth;
        this.displayName = fields.displayName;
        this.password = fields.passwordHash;

        if (fields.profilePicture) this.profilePicture = fields.profilePicture;
    }

}
