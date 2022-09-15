import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateEstudianteDto, EstudianteDto, UpdateEstudianteDto } from '../dto/estudiante.dtos';
import { Estudiante } from '../entities/estudiante.entity';

@Injectable()
export class EstudianteService {

  constructor(
    @InjectRepository(Estudiante) private estudianteRepo: Repository<Estudiante>,
  ) {
  }

  async create(createEstudianteDto: CreateEstudianteDto): Promise<EstudianteDto> {
    const nuevoDato = await this.estudianteRepo.create(createEstudianteDto);
    const guardarEstudiante: Estudiante = await this.estudianteRepo.save(nuevoDato);
    return plainToClass(EstudianteDto, guardarEstudiante)
  }

  async findAll(): Promise<EstudianteDto[]> {
    const estudiantes: Estudiante[] = await this.estudianteRepo.find();
    return estudiantes.map((estudiante: Estudiante) => plainToClass(EstudianteDto, estudiante))
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
