import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateLibroDto, LibroDto, UpdateLibroDto } from '../dto/libro.dto';
import { Libro } from '../entities/libro.entity';

@Injectable()
export class LibroService {

  constructor(
    @InjectRepository(Libro) private estudianteRepo: Repository<Libro>,
  ) {
  }
  
  create(createLibroDto: CreateLibroDto) {
    return 'This action adds a new libro';
  }

  async findAll(): Promise<LibroDto[]> {
    const estudiantes: Libro[] = await this.estudianteRepo.find();
    return estudiantes.map((libro: Libro ) => plainToClass(LibroDto, libro))
  }

  findOne(id: number) {
    return `This action returns a #${id} libro`;
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
