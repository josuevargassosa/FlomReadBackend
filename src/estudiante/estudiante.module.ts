import { Module } from '@nestjs/common';
import { EstudianteController } from './controllers/estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lector } from './entities/estudiante.entity';
import { EstudianteService } from './services/estudiante.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lector])],
  controllers: [EstudianteController],
  providers: [EstudianteService],
  exports: [EstudianteService]
})
export class EstudianteModule {}
