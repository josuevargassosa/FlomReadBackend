import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';


@Exclude()
export class LibroLectorDto {
    @Expose()
    @ApiProperty()
    readonly id: number;

    @Expose()
    @ApiProperty()
    readonly lector: string;

    @Expose()
    @ApiProperty()
    readonly libro: string;

    @Expose()
    @ApiProperty()
    readonly estado: string;

    @Expose()
    @ApiProperty()
    readonly tiempo: string;

    @Expose()
    @ApiProperty()
    readonly fechaCreacion: string;

    @Expose()
    @ApiProperty()
    readonly fechaModificacion: string;
}

export class CreateLibroLectorDto {

    @IsNumber()
    @Expose()
    @ApiProperty({ description: `Id del libro` })
    readonly idLibro: number;

    @IsNumber()
    @Expose()
    @ApiProperty()
    readonly idLector: number;

    @IsString()
    @Expose()
    @ApiProperty()
    readonly estado: string;

}




export class UpdateLibroLectorDto extends PartialType(CreateLibroLectorDto) {}
