import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Libro {

    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    Nombre: string

    @Column()
    Autor: string

    @Column()
    Resumen: string

    @Column()
    FotoPortada: string


    @Column()
    Estado: string


    @Column()
    FechaCreacion: Date


    @Column()
    FechaModificacion: Date


}
