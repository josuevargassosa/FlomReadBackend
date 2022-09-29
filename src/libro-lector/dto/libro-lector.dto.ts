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
    readonly idLibro: number;

    @Expose()
    @ApiProperty()
    readonly idLector: number;

    @Expose()
    @ApiProperty()
    readonly estado: string;
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
