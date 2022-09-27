import { Injectable } from '@nestjs/common';
import { CreateLibroLectorDto } from './dto/create-libro-lector.dto';
import { UpdateLibroLectorDto } from './dto/update-libro-lector.dto';

@Injectable()
export class LibroLectorService {
  create(createLibroLectorDto: CreateLibroLectorDto) {
    return 'This action adds a new libroLector';
  }

  findAll() {
    return `This action returns all libroLector`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libroLector`;
  }

  update(id: number, updateLibroLectorDto: UpdateLibroLectorDto) {
    return `This action updates a #${id} libroLector`;
  }

  remove(id: number) {
    return `This action removes a #${id} libroLector`;
  }
}
