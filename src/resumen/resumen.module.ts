import { Module } from '@nestjs/common';
import { ResumenService } from './services/resumen.service';
import { ResumenController } from './controllers/resumen.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resumen } from './entities/resuman.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Resumen])],
  controllers: [ResumenController],
  providers: [ResumenService],
  exports: [ResumenService]
})
export class ResumenModule {}
