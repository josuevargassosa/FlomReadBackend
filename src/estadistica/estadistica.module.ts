import { Module } from '@nestjs/common';
import { EstadisticaService } from './services/estadistica.service';
import { EstadisticaController } from './controller/estadistica.controller';

@Module({
  controllers: [EstadisticaController],
  providers: [EstadisticaService]
})
export class EstadisticaModule {}
