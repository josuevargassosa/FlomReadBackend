import { PartialType } from '@nestjs/swagger';
import { CreateLibroLectorDto } from './create-libro-lector.dto';

export class UpdateLibroLectorDto extends PartialType(CreateLibroLectorDto) {}
