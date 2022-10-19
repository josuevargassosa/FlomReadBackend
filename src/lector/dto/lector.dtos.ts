import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
  IsEmail,
  IsDate,
  IsInt,
  IsBoolean,
  IsOptional,
  isEmail,
  IsArray,
  Max,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';


@Exclude()
export class LectorDto {
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
  readonly identificacion: string;

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

  @Expose()
  @ApiProperty()
  readonly sexo: string;
}


export class CreateLectorDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly nombres: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly apellidos: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly identificacion: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly edad: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly correo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly grado: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly fotoPerfil: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly estado: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly clave: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly sexo: string;
}


export class UpdateLectorDto extends PartialType(CreateLectorDto) {
  @ApiProperty()
  readonly nombres: string;

  @ApiProperty()
  readonly apellidos: string;

  @ApiProperty()
  readonly identificacion: string;

  @ApiProperty()
  readonly edad: number;

  @ApiProperty()
  readonly correo: string;

  @ApiProperty()
  readonly grado: string;

  @ApiProperty()
  readonly fotoPerfil: string;

  @ApiProperty()
  readonly estado: string;

  @ApiProperty()
  readonly sexo: string;
}
