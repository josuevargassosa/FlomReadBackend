import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibroLectorService } from '../services/libro-lector.service';
import { CreateLibroLectorDto } from '../dto/create-libro-lector.dto';
import { UpdateLibroLectorDto } from '../dto/update-libro-lector.dto';

@Controller('libro-lector')
export class LibroLectorController {
  constructor(private readonly libroLectorService: LibroLectorService) {}

  @Post()
  create(@Body() createLibroLectorDto: CreateLibroLectorDto) {
    return this.libroLectorService.create(createLibroLectorDto);
  }

  @Get()
  findAll() {
    return this.libroLectorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.libroLectorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLibroLectorDto: UpdateLibroLectorDto) {
    return this.libroLectorService.update(+id, updateLibroLectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.libroLectorService.remove(+id);
  }
}
