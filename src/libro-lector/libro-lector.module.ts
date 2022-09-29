import { Module } from '@nestjs/common';
import { LibroLectorService } from './services/libro-lector.service';
import { LibroLectorController } from './controllers/libro-lector.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibroLector } from './entities/libro-lector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LibroLector])],
  controllers: [LibroLectorController],
  providers: [LibroLectorService],
  exports: [LibroLectorService]
})
export class LibroLectorModule {}
