import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateResumanDto, ResumenDto, UpdateResumanDto } from '../dto/resumen.dto';
import { Resumen } from '../entities/resuman.entity';

@Injectable()
export class ResumenService {

  constructor(
    @InjectRepository(Resumen) private estudianteRepo: Repository<Resumen>,
  ) {
  }
  
  create(createResumanDto: CreateResumanDto) {
    return 'This action adds a new resuman';
  }

  async findAll(): Promise<ResumenDto[]> {
    const estudiantes: Resumen[] = await this.estudianteRepo.find();
    return estudiantes.map((resumen: Resumen ) => plainToClass(ResumenDto, resumen))
  }

  findOne(id: number) {
    return `This action returns a #${id} resuman`;
  }

  update(id: number, updateResumanDto: UpdateResumanDto) {
    return `This action updates a #${id} resuman`;
  }

  remove(id: number) {
    return `This action removes a #${id} resuman`;
  }
}
