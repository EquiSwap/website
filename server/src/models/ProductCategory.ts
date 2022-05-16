import { TrackedBaseEntity } from './BaseEntity';
import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { Product } from './Product';

@Entity({ tableName: 'product_categories' })
export class ProductCategory extends TrackedBaseEntity {

    @Property({ unique: true })
    slug!: string;

    @Property({ unique: true })
    name!: string;

    @Property({ columnType: 'text', nullable: false })
    image!: string;

    @OneToMany(() => Product, product => product.category)
    products: Collection<Product> = new Collection<Product>(this);

    constructor(fields: {
        slug: string;
        name: string;
        image: string;
    }) {
        super();
        this.slug = fields.slug;
        this.name = fields.name;
        this.image = fields.image;
    }

}
