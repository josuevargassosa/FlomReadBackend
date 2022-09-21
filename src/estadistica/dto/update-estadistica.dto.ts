import { PartialType } from '@nestjs/swagger';
import { CreateEstadisticaDto } from './create-estadistica.dto';

export class UpdateEstadisticaDto extends PartialType(CreateEstadisticaDto) {}
