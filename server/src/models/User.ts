import {Cascade, Collection, Entity, OneToMany, Property} from '@mikro-orm/core';
import { TrackedBaseEntity } from './BaseEntity';
import { Product } from './Product';

@Entity({ tableName: 'users' })
export class User extends TrackedBaseEntity {

    @Property({ length: 255, unique: true })
    email!: string;

    @Property({ unique: true })
    username!: string;

    @Property({ columnType: 'text', nullable: true })
    displayName?: string;

    @Property({ persist: false })
    get smartName() {
        return this.displayName ?? `@${this.username}`;
    }

    @Property({ columnType: 'text', nullable: true })
    profilePicture?: string;

    @Property({ columnType: 'date', hidden: true })
    dateOfBirth!: string;

    @Property({ length: 255, hidden: true })
    password!: string;

    @Property({ hidden: true })
    postcode?: string;

    @Property({ hidden: true })
    street?: string;

    @Property({ hidden: true })
    county?: string;

    @Property()
    country?: string;

    @OneToMany(() => Product, product => product.owner, { cascade: [ Cascade.PERSIST ] })
    products: Collection<Product> = new Collection<Product>(this);

    constructor(fields: {
        username: string;
        email: string;
        displayName: string;
        dateOfBirth?: string;
        passwordHash: string;
        profilePicture?: string;
    }) {
        super();

        this.username = fields.username;
        this.email = fields.email;
        this.dateOfBirth = fields.dateOfBirth ?? '1990-01-01';
        this.displayName = fields.displayName;
        this.password = fields.passwordHash;

        if (fields.profilePicture) this.profilePicture = fields.profilePicture;
    }

}
