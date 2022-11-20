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
      type: process.env.DATABASE_TYPE as any,
      host: process.env.DATABASE_HOST,
      port: parseInt( process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
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
  exports: [TypeOrmModule],
})
export class DatabaseModule { }
