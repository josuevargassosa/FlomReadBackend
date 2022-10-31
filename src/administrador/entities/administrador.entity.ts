import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity()
export class Administrador {

    @PrimaryGeneratedColumn({name: 'Id'})
    id: number

    @Column({name: 'Nombres'})
    nombres: string

    @Column({name: 'Identificacion'})
    correo: string

    @Column({name: 'Apellidos'})
    clave: string
}
