import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { LibroDto, UpdateLibroDto } from 'src/libro/dto/libro.dto';
import { LibroService } from 'src/libro/services/libro.service';
import { Repository } from 'typeorm';
import { CreateLibroLectorDto, LibroLectorDto, prestamosLectorDto } from '../dto/libro-lector.dto';
import { UpdateLibroLectorDto } from '../dto/libro-lector.dto';
import { LibroLector } from '../entities/libro-lector.entity';

@Injectable()
export class LibroLectorService {

  constructor(
    @InjectRepository(LibroLector) private libroLectorRepo: Repository<LibroLector>,
    private libroService: LibroService,
  ) {
  }

  async create(createLibroLectorDto: CreateLibroLectorDto): Promise<CreateLibroLectorDto> {
    const nuevoDato = await this.libroLectorRepo.create(createLibroLectorDto);
    const guardarlibroPrestamo: LibroLector = await this.libroLectorRepo.save(nuevoDato);
    console.log('PRESTAMO',guardarlibroPrestamo);
    var libro: LibroDto = await this.libroService.findOne(guardarlibroPrestamo.idLibro);
    await this.cambiarEstado(libro, 'P');
    return plainToClass(CreateLibroLectorDto, guardarlibroPrestamo)
  }

  cambiarEstado(libro: LibroDto, estado: string) {
    const updateLibro = {
      id: libro.id,
      nombre: libro.nombre,
      autor: libro.autor,
      resumen: libro.resumen,
      fotoPortada: libro.fotoPortada,
      estado: estado,
      codigo: libro.codigo
    }
    this.libroService.update(libro.id, updateLibro);
  }

  async getPrestamos(): Promise<LibroLectorDto[]> {
    const prestamos: LibroLector[] = await this.libroLectorRepo.find(
      {
        relations: [
          "libro",
          "lector"
        ]
      }
    );
    // this.calcularTiempo(prestamos);
    return prestamos.map((libro: LibroLector) => plainToClass(LibroLectorDto, libro))
  }

  calcularTiempo(prestamos: LibroLector[]) {
    prestamos.forEach((libro: LibroLector) => {
      var fechaActual = new Date();
      var fechaPrestamo = new Date(libro.fechaCreacion);
      var tiempo = fechaActual.getTime() - fechaPrestamo.getTime();
      var dias = tiempo / (1000 * 3600 * 24);
      // libro.tiempo = Math.round(dias);
    });
  }

  async findOne(idLector: number): Promise<prestamosLectorDto[]> {
    const dataPrestamo: LibroLector[] = await this.libroLectorRepo.find({
      where: {
        idLector: idLector
      }
    }) 
    console.log(dataPrestamo);
    if (!dataPrestamo) {
      throw new NotFoundException(`Prestamo del lector #${idLector} no encontrado`);
    }
    //return dataPrestamo.map((libro: LibroLector) => plainToClass(prestamosLectorDto, dataPrestamo))
    return plainToClass(prestamosLectorDto, dataPrestamo)
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
