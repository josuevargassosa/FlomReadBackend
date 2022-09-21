import { Injectable } from '@nestjs/common';
import { CreateEstadisticaDto } from '../dto/create-estadistica.dto';
import { UpdateEstadisticaDto } from '../dto/update-estadistica.dto';

@Injectable()
export class EstadisticaService {
  create(createEstadisticaDto: CreateEstadisticaDto) {
    return 'This action adds a new estadistica';
  }

  findAll() {
    return `This action returns all estadistica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadistica`;
  }

  update(id: number, updateEstadisticaDto: UpdateEstadisticaDto) {
    return `This action updates a #${id} estadistica`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadistica`;
  }
}
