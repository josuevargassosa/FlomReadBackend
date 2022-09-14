import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Estudiante {

    @PrimaryGeneratedColumn()
    Id: number

    @Column()
    Nombres: string

    @Column()
    Apellidos: string

    @Column()
    Edad: number

    @Column()
    Correo: string


    @Column()
    Grado: string

    @Column()
    FotoPerfil: string

    @Column()
    Estado: string


    @Column()
    FechaCreacion: Date


    @Column()
    Clave: string

    @Column()
    FechaModificacion: string

}
