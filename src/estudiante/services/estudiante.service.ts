import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { RelationId, Repository } from 'typeorm';
import { CreateEstudianteDto, EstudianteDto, UpdateEstudianteDto } from '../dto/estudiante.dtos';
import { Lector } from '../entities/estudiante.entity';

@Injectable()
export class EstudianteService {

  constructor(
    @InjectRepository(Lector) private estudianteRepo: Repository<Lector>,
  ) {
  }

  async create(createEstudianteDto: CreateEstudianteDto): Promise<EstudianteDto> {
    const nuevoDato = await this.estudianteRepo.create(createEstudianteDto);
    const guardarEstudiante: Lector = await this.estudianteRepo.save(nuevoDato);
    return plainToClass(EstudianteDto, guardarEstudiante)
  }

  async findAll(): Promise<EstudianteDto[]> {
    const estudiantes: Lector[] = await this.estudianteRepo.find();
    return estudiantes.map((estudiante: Lector) => plainToClass(EstudianteDto, estudiante))
  }

  async findOne(idEstudiante): Promise<EstudianteDto> {
    const estudiante: Lector = await this.estudianteRepo.findOneBy({
      id: idEstudiante,
    }) 
    if (!estudiante) {
      throw new NotFoundException(`Promoción #${idEstudiante} no encontrado`);
    }
    return plainToClass(EstudianteDto, estudiante)
  }

  async update(id, updateEstudianteDto: UpdateEstudianteDto): Promise<EstudianteDto> {
    const estudiante = await this.estudianteRepo.findOneBy(id);
    this.estudianteRepo.merge(estudiante, updateEstudianteDto);
    const guardarDato: EstudianteDto = await this.estudianteRepo.save(estudiante);
    return plainToClass(EstudianteDto, guardarDato)
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}
