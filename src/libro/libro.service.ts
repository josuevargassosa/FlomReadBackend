import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Injectable()
export class LibroService {
  create(createLibroDto: CreateLibroDto) {
    return 'This action adds a new libro';
  }

  findAll() {
    return `This action returns all libro`;
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
