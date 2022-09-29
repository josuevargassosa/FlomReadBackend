import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateLibroLectorDto, LibroLectorDto } from '../dto/libro-lector.dto';
import { UpdateLibroLectorDto } from '../dto/libro-lector.dto';
import { LibroLector } from '../entities/libro-lector.entity';

@Injectable()
export class LibroLectorService {

  constructor(
    @InjectRepository(LibroLector) private libroLectorRepo: Repository<LibroLector>,
  ) {
  }
  
  create(createLibroLectorDto: CreateLibroLectorDto) {
    return 'This action adds a new libroLector';
  }

  async findAll(): Promise<LibroLectorDto[]> {
    const libros: LibroLector[] = await this.libroLectorRepo.find();
    return libros.map((libro: LibroLector ) => plainToClass(LibroLectorDto, libro))
  }

  findOne(id: number) {
    return `This action returns a #${id} libroLector`;
  }

  async countLibrosPrestaodsfindAll(): Promise<number> {
    const libros = await this.libroLectorRepo.count({
      // where: {
      //   estado: 'prestado'
      // }
      // relation: [
      //   "libro", "libro.precio",
      //   "lector", "lector.precio"
      // ]
    });
    return libros
  }

  update(id: number, updateLibroLectorDto: UpdateLibroLectorDto) {
    return `This action updates a #${id} libroLector`;
  }

  remove(id: number) {
    return `This action removes a #${id} libroLector`;
  }
}
