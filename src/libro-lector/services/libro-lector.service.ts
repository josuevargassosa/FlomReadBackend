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

  async create(createLibroLectorDto: CreateLibroLectorDto): Promise<CreateLibroLectorDto> {
    const nuevoDato = await this.libroLectorRepo.create(createLibroLectorDto);
    const guardarlibroPrestamo: LibroLector = await this.libroLectorRepo.save(nuevoDato);
    return plainToClass(CreateLibroLectorDto, guardarlibroPrestamo)
  }

  async getPrestamos(): Promise<LibroLectorDto[]> {
    const libros: LibroLector[] = await this.libroLectorRepo.find(
      {
        relations: [
          "libro",
          "lector"
        ]
      }
    );
    return libros.map((libro: LibroLector) => plainToClass(LibroLectorDto, libro))
  }

  findOne(id: number) {
    return `This action returns a #${id} libroLector`;
  }

  async cantidadLibrosLeidos(): Promise<number> {
    const libros = await this.libroLectorRepo.count({
      where: {
        estado: 'L'
      }
    });
    return libros
  }

  async cantidadLibrosPrestados(): Promise<number> {
    const libros = await this.libroLectorRepo.count({
      where: {
        estado: 'P'
      }
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
