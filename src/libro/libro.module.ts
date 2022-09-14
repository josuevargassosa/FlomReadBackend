import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './controllers/libro.controller';

@Module({
  controllers: [LibroController],
  providers: [LibroService]
})
export class LibroModule {}
