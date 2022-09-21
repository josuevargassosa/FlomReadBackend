import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadisticaService } from './../services/estadistica.service';
import { CreateEstadisticaDto } from './../dto/create-estadistica.dto';
import { UpdateEstadisticaDto } from './../dto/update-estadistica.dto';

@Controller('estadistica')
export class EstadisticaController {
  constructor(private readonly estadisticaService: EstadisticaService) {}

  @Post()
  create(@Body() createEstadisticaDto: CreateEstadisticaDto) {
    return this.estadisticaService.create(createEstadisticaDto);
  }

  @Get()
  findAll() {
    return this.estadisticaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estadisticaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadisticaDto: UpdateEstadisticaDto) {
    return this.estadisticaService.update(+id, updateEstadisticaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estadisticaService.remove(+id);
  }
}
