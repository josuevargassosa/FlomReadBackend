import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteModule } from './estudiante/estudiante.module';
import { LibroModule } from './libro/libro.module';
import { ResumenModule } from './resumen/resumen.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    EstudianteModule,
    LibroModule,
    ResumenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
