import { Module } from '@nestjs/common';
import { ResumenService } from './resumen.service';
import { ResumenController } from './controllers/resumen.controller';

@Module({
  controllers: [ResumenController],
  providers: [ResumenService]
})
export class ResumenModule {}