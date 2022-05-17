import {Entity, Enum, ManyToOne, Property} from '@mikro-orm/core';
import {Product} from './Product';

export enum PaymentStatus {
    PENDING = 'pending',
    COMPLETED = 'completed'
}

@Entity({ tableName: 'trades' })
export class Trades {

    @Enum(() => PaymentStatus)
    paymentStatus!: PaymentStatus;

    /**
     * Person A's product.
     */
    @ManyToOne(() => Product, { primary: true })
    productA!: Product;

    /**
     * Person B's product.
     */
    @ManyToOne(() => Product, { primary: true })
    productB!: Product;

    /**
     * The amount of money used by person A to leverage the trade,
     * in pence.
     */
    @Property({ nullable: true })
    leverageA?: number;

    /**
     * The amount of money used by person B to leverage the trade,
     * in pence.
     */
    @Property()
    leverageB?: number;

    /**
     * The date the trade occurred.
     */
    @Property()
    createdAt = new Date();

    /**
     * The date the trade was last updated.
     */
    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();

}
