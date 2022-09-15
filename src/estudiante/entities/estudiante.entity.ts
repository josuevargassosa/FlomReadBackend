import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Estudiante {

    @PrimaryGeneratedColumn({name: 'Id'})
    id: number

    @Column({name: 'Nombres'})
    nombres: string

    @Column({name: 'Apellidos'})
    apellidos: string

    @Column({name: 'Edad'})
    edad: number

    @Column({name: 'Correo', type: 'nchar', length: 40})
    correo: string

    @Column({name: 'Grado'})
    grado: string

    @Column({name: 'FotoPerfil', type: 'nchar', length: 50, nullable: false})
    fotoPerfil: string

    @Column({name: 'Estado'})
    estado: string

    @Column({name: 'FechaCreacion'})
    fechaCreacion: Date

    @Column({name: 'Clave'})
    clave: string

    @Column({name: 'FechaModificacion'})
    fechaModificacion: string

}
