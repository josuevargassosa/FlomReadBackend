import { PartialType } from '@nestjs/swagger';
import { CreateResumanDto } from './create-resuman.dto';

export class UpdateResumanDto extends PartialType(CreateResumanDto) {}
