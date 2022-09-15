import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';


@Exclude()
export class LibroDto {
  @Expose()
  @ApiProperty()
  readonly id: number;

  @Expose()
  @ApiProperty()
  readonly nombre: string;

  @Expose()
  @ApiProperty()
  readonly autor: string;

  @Expose()
  @ApiProperty()
  readonly resumen: string;

  @Expose()
  @ApiProperty()
  readonly fotoPortada: string;

  @Expose()
  @ApiProperty()
  readonly estado: string;
}

export class CreateLibroDto {}

export class UpdateLibroDto extends PartialType(CreateLibroDto) {}
