import { TrackedBaseEntity } from './BaseEntity';
import { Collection, Entity, ManyToOne, Property } from '@mikro-orm/core';
import { User } from './User';
import { ProductCategory } from './ProductCategory';

@Entity({ tableName: 'products' })
export class Product extends TrackedBaseEntity {

    @Property({ nullable: false, default: true })
    active!: boolean;

    @Property({ nullable: false })
    title!: string;

    @Property({ columnType: 'text', nullable: false })
    description!: string;

    @Property({ columnType: 'text', nullable: false })
    image!: string;

    @ManyToOne({ nullable: false })
    category!: ProductCategory;

    @Property({ nullable: true, lazy: true })
    willTradeFor?: Collection<ProductCategory>; // = new Collection<ProductCategory>(this);

    @ManyToOne({ nullable: true })
    owner!: User;

    constructor(props: {
        title: string;
        description: string;
        image: string;
        category: ProductCategory;
        owner: User;
    }) {
        super();

        this.title = props.title;
        this.description = props.description;
        this.image = props.image;
        this.category = props.category;
        this.owner = props.owner;
    }

}
