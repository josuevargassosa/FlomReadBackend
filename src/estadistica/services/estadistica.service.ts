import { Injectable } from '@nestjs/common';
import { EstadisticaLibroDto, EstadisticaLectorDto } from '../dto/create-estadistica.dto';
import { LibroService } from 'src/libro/services/libro.service';
import { LibroLector } from 'src/libro-lector/entities/libro-lector.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EstadisticaService {
  constructor(
    @InjectRepository(LibroLector) private libroLectorRepo: Repository<LibroLector>,
    private libroLector: LibroLector,
  ) {
  }


  async getTop5Libros() {
    // const librosLeidos = await this.libroLectorRepo.find(
    //   {
    //     where: {
    //       estado: 'L'
    //     }, 
    //     take: 5,
        
    //   }
    // )
    return await this.libroLectorRepo.query("sp_prueba @email='"+email +"'");
  }

  // async find(email: string): Promise<Usuario[]>{
  //   return await this.usuariosRepository.query("sp_prueba @email='"+email +"'");
  // }



  getTop5Instituciones() {

  }

  getTop5Lectores() {
    
  }
}
