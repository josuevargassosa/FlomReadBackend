import { Lector } from "src/lector/entities/lector.entity";
import { Libro } from "src/libro/entities/libro.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LibroLector {

    @PrimaryGeneratedColumn({name: 'Id'})
    id: number

    @Column({name: 'IdLibro'})
    idLibro: number

    @Column({name: 'IdLector'})
    idLector: number

    @Column({name: 'Estado'})
    estado: string


    @Column({name: 'FechaCreacion'})
    fechaCreacion: Date


    @Column({name: 'FechaModificacion'})
    fechaModificacion: Date;

    @ManyToOne(() => Libro, (libro) => libro.id)

    //JOIN COLUMMN LIBRO
    @JoinColumn({name: 'Id', referencedColumnName: 'id'})
    libro: Libro

    //JOIN COLUMMN LECTOR
    @JoinColumn({name: 'Id', referencedColumnName: 'id'})
    lector: Lector
}
