import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Resumen {

    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    IdLibro: number

    @Column()
    IdEstudiante: number

    @Column()
    Descripcion: string

    @Column()
    FechaCreacion: string


    @Column()
    FechaModificacion: string
}
