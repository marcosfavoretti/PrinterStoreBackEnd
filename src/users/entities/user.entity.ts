import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({
    name: 'Users'
})
export class User {
    @PrimaryColumn()
    iduser: string
    @Column()
    user: string
    @Column()
    pass: string
    @Column()
    email: string
    @Column()
    phone: string
}