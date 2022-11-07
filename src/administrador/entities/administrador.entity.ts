import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity()
export class Administrador {

    @PrimaryGeneratedColumn({name: 'Id'})
    id: number

    @Column({name: 'Nombre'})
    nombre: string

    @Column({name: 'Correo'})
    correo: string

    @Column({name: 'Clave'})
    clave: string
}
