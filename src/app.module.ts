import { AuthModule } from './auth/auth.module';
import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LectorModule } from './lector/lector.module';
import { LibroModule } from './libro/libro.module';
import { ResumenModule } from './comentario/resumen.module';
import { DatabaseModule } from './database/database.module';
import { EstadisticaModule } from './estadistica/estadistica.module';
import { LibroLectorModule } from './libro-lector/libro-lector.module';

@Module({
  imports: [
    // AuthModule, 
    DatabaseModule,
    LectorModule,
    LibroModule,
    ResumenModule,
    EstadisticaModule,
    LibroLectorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
