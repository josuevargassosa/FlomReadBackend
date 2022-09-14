import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';
@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'josue',
      password: 'josue123',
      database: 'flom',
      options: { encrypt: false },
      autoLoadEntities: true,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
  ],
  // providers: [
  //   {
  //     provide: 'API_KEY',
  //     useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
  //   },
  // ],
  // exports: ['API_KEY', TypeOrmModule],
})
export class DatabaseModule { }
