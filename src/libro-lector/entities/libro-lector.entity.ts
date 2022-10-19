import { Lector } from "src/lector/entities/lector.entity";
import { Libro } from "src/libro/entities/libro.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "LibroLector"})
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


    //JOIN COLUMMN LIBRO
    @ManyToOne(() => Libro, (libro) => libro.id)
    @JoinColumn({name: 'IdLibro', referencedColumnName: 'id'})
    libro: Libro

    //JOIN COLUMMN LECTOR
    @ManyToOne(() => Lector, (lector) => lector.id)
    @JoinColumn({name: 'IdLector', referencedColumnName: 'id'})
    lector: Lector
}
