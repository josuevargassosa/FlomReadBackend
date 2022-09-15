import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Resumen {

    @PrimaryGeneratedColumn({name: 'Id'})
    id: number

    @Column({name: 'IdLibro'})
    idLibro: number

    @Column({name: 'IdEstudiante'})
    idEstudiante: number

    @Column({name: 'Descripcion'})
    descripcion: string

    @Column({name: 'FechaCreacion'})
    fechaCreacion: string


    @Column({name: 'FechaModificacion'})
    fechaModificacion: string
}
