import { AdministradorService } from './administrador/services/administrador.service';
import { AdministradorController } from './administrador/administrador.controller';
import { AuthModule } from './auth/auth.module';
import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LectorModule } from './lector/lector.module';
import { LibroModule } from './libro/libro.module';
import { ComentarioModule } from './comentario/resumen.module';
import { DatabaseModule } from './database/database.module';
import { EstadisticaModule } from './estadistica/estadistica.module';
import { LibroLectorModule } from './libro-lector/libro-lector.module';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from './enviroments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    
    // AuthModule,
    DatabaseModule,
    LectorModule,
    // LibroModule,
    // ComentarioModule,
    // EstadisticaModule,
    // LibroLectorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
