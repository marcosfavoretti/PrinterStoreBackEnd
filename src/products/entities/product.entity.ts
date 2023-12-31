import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({
    name: 'products'
})
export class Products {
    @PrimaryColumn({ type: 'int', generated: true })
    idproduct: number;

    @Column({ type: 'varchar' })
    product: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @Column({ type: 'text' })
    description: string;
}