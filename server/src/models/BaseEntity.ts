import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

/**
 * Defines a base set of properties that are common to more
 * or less any entity in the database.
 */
@Entity({ abstract: true })
export abstract class BaseEntity {

    @PrimaryKey({
        type: 'uuid',
        columnType: 'uuid',
        defaultRaw: 'gen_random_uuid()'
    })
    id!: string;

}

/**
 * Similar to {@see BaseEntity}, however this class has
 * createdAt and updatedAt timestamps that are set and
 * updated automatically.
 */
@Entity({ abstract: true })
export abstract class TrackedBaseEntity extends BaseEntity {

    @Property()
    createdAt = new Date();

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();

}
