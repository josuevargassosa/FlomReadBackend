import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Libro {

    @PrimaryGeneratedColumn({name: 'Id'})
    id: number

    @Column({name: 'Nombre'})
    nombre: string

    @Column({name: 'Autor'})
    autor: string

    @Column({name: 'Resumen'})
    resumen: string

    @Column({name: 'FotoPortada'})
    fotoPortada: string


    @Column({name: 'Estado'})
    estado: string


    @Column({name: 'FechaCreacion'})
    fechaCreacion: Date


    @Column({name: 'FechaModificacion'})
    fechaModificacion: Date

    @Column({name: 'Codigo'})
    Codigo: string

}
