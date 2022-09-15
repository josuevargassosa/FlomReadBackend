import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';


@Exclude()
export class ResumenDto {
  @Expose()
  @ApiProperty()
  readonly id: number;

  @Expose()
  @ApiProperty()
  readonly idLibro: number;

  @Expose()
  @ApiProperty()
  readonly idEstudiante: number;

  @Expose()
  @ApiProperty()
  readonly descripcion: string;
}


export class CreateResumanDto {}

export class UpdateResumanDto extends PartialType(CreateResumanDto) {}
