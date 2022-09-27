import { Module } from '@nestjs/common';
import { LibroLectorService } from './libro-lector.service';
import { LibroLectorController } from './libro-lector.controller';

@Module({
  controllers: [LibroLectorController],
  providers: [LibroLectorService]
})
export class LibroLectorModule {}
