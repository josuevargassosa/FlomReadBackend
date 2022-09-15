import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';


@Exclude()
export class EstudianteDto {
  @Expose()
  @ApiProperty()
  readonly id: number;

  @Expose()
  @ApiProperty()
  readonly nombres: string;

  @Expose()
  @ApiProperty()
  readonly apellidos: string;

  @Expose()
  @ApiProperty()
  readonly edad: number;

  @Expose()
  @ApiProperty()
  readonly correo: string;

  @Expose()
  @ApiProperty()
  readonly grado: string;

  @Expose()
  @ApiProperty()
  readonly fotoPerfil: string;

  @Expose()
  @ApiProperty()
  readonly estado: string;
}