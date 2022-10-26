/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import config from './../config'
import { ConfigType } from '@nestjs/config';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthService } from './services/auth.service';

@Module({
    imports: [
        PassportModule, 
        JwtModule.registerAsync({
        inject: [config.KEY],
        useFactory: (configService: ConfigType<typeof config>) => {
            return {
                // secret: configService.jwtSecret,
                // signOptions: {
                //     expiresIn: '1d'
                // }
            }
        }})
    ],
    controllers: [AuthService, LocalStrategy, JwtStrategy],
    providers: [AuthService],
})
export class AuthModule {}
