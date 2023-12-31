import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Products } from "./product.entity"

@Entity({
    name: 'products_photo'
})
export class Products_photo {
    @PrimaryColumn({ type: 'int', generated: true })
    id_img
    @Column({type: "varchar"})
    photo
    @Column({type:"boolean"})
    isMain

    @ManyToOne(type => Products, { eager: true }) // Especifica o tipo da tabela referenciada (Product)
    @JoinColumn({ name: 'idproduct' }) // Nome da coluna que será a chave estrangeira
    idproduct: Products; // Nome da propriedade na classe que representa a tabela referenciada
}