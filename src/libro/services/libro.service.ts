import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { CreateLibroDto, LibroDto, UpdateLibroDto } from '../dto/libro.dto';
import { Libro } from '../entities/libro.entity';

@Injectable()
export class LibroService {

  constructor(
    @InjectRepository(Libro) private libroRepo: Repository<Libro>,
  ) {
  }
  
  async create(createLibroDto: CreateLibroDto): Promise<LibroDto> {
    const nuevoDato = await this.libroRepo.create(createLibroDto);
    const guardarlibro: Libro = await this.libroRepo.save(nuevoDato);
    return plainToClass(LibroDto, guardarlibro)
  }

  async findAll(): Promise<LibroDto[]> {
    const libros: Libro[] = await this.libroRepo.find();
    return libros.map((libro: Libro ) => plainToClass(LibroDto, libro))
  }

  async findOne(idLibro): Promise<LibroDto> {
    const libro: Libro = await this.libroRepo.findOneBy({
      id: idLibro,
    }) 
    if (!libro) {
      throw new NotFoundException(`Promoción #${idLibro} no encontrado`);
    }
    return plainToClass(LibroDto, libro)
  }

  async update(id: any, updateLectorDto: UpdateLibroDto): Promise<LibroDto> {
    const libro = await this.libroRepo.findOneBy(id);
    this.libroRepo.merge(libro, updateLectorDto);
    const guardarDato: LibroDto = await this.libroRepo.save(libro);
    return plainToClass(LibroDto, guardarDato)
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
