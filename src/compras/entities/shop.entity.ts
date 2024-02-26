import { Products } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({
    name: 'shop'
})
export class Shop {

    @PrimaryColumn({ type: 'int', generated: true })
    idcompra: number;

    @ManyToOne(type => User, { eager: true }) // Especifica o tipo da tabela referenciada (Product)
    @JoinColumn({ name: 'iduser' }) // Nome da coluna que será a chave estrangeira
    iduser: User; // Nome da propriedade na classe que representa a tabela referenciada

    @ManyToOne(type => Products, { eager: true }) // Especifica o tipo da tabela referenciada (Product)
    @JoinColumn({ name: 'idproduto' }) // Nome da coluna que será a chave estrangeira
    idproduto: Products; // Nome da propriedade na classe que representa a tabela referenciada

    @Column()
    unid: number
}

