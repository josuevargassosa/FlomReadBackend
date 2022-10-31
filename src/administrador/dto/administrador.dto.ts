import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";


export class AdministradorDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly id: number;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly clave: string;

  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly correo: string;

}

export class loginDto {
    @Expose()
    @ApiProperty()
    readonly correo: string;
  
    @Expose()
    @ApiProperty()
    readonly clave: string;
}
  