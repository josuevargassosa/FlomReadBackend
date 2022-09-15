import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateEstudianteDto } from '../dto/create-estudiante.dto';
import { EstudianteDto } from '../dto/estudiante.dtos';
import { UpdateEstudianteDto } from '../dto/update-estudiante.dto';
import { Estudiante } from '../entities/estudiante.entity';

@Injectable()
export class EstudianteService {
  
  constructor(
    @InjectRepository(Estudiante) private estudianteRepo: Repository<Estudiante>,
  ) {
  }

  create(
    createEstudianteDto: CreateEstudianteDto
  ) {
    return 'This action adds a new estudiante';
  }

  async findAll(): Promise<EstudianteDto[]> {
    const estudiantes: Estudiante[] = await this.estudianteRepo.find();
    return estudiantes.map((estudiante: Estudiante ) => plainToClass(EstudianteDto, estudiante))
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
