import { Injectable } from '@nestjs/common';
import { CreateResumanDto } from '../dto/create-resuman.dto';
import { UpdateResumanDto } from '../dto/update-resuman.dto';

@Injectable()
export class ResumenService {
  create(createResumanDto: CreateResumanDto) {
    return 'This action adds a new resuman';
  }

  findAll() {
    return `This action returns all resumen`;
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
