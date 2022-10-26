import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PayloadToken } from "./../models/token.model";

// import { EmpresaDto, EmpresaEmailDto, UpdateClaveDto, UpdateCorreoDto, UpdateEmpresaDto } from 'src/empresa/dtos/empresa.dtos';
import { classToPlain, plainToClass } from 'class-transformer';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';


@Injectable()
export class AuthService {
    constructor(
        // private empresaService: EmpresaService,
        private jwtService: JwtService,
        // @InjectRepository(Empresa) private empresaRepo: Repository<Empresa>,
        // @InjectRepository(Permiso) private permisoRepo: Repository<Permiso>,
        // private mailService: MailService
        ) { }

    async validateUser(correo: string, clave: string) {
        // const user = await this.empresaService.findByEmail(correo);
        // if (user) {
        //     const isMatch = await bcrypt.compare(clave, user.clave);
        //     if (isMatch) {
        //         const { clave, ...rta } = user;
        //         return rta;
        //     }
        // }
        // return null;
    }

    generateJWT(empresa: any) {
        const payload: PayloadToken = { nombre: empresa.nombre, sub: empresa.id, idPlan: empresa.idPlan, idRol: empresa.idRol } 
        console.log(payload)
        return {
            access_token: this.jwtService.sign(payload),
            empresa,
            message: "Inicio de sesión exitoso"
        }
    }

    refreshJWT(token: any) {
        const empresa = this.jwtService.verify(token["accessToken"], { publicKey: IS_PUBLIC_KEY })
        return {
            access_token: token["accessToken"],
            empresa,
            message: "Inicio de sesión exitoso"
        }
    }

    async perfil(idEmpresa: number) {
        // var empresa = await this.empresaService.findOneId(idEmpresa);
        // return empresa
    }

    async recuperarClave(changes: any) {
        // const user = await this.empresaService.findByEmail(changes.correo);
        // if (user) {
        //     user.clave = uid(8)
        //     const clave = user.clave
        //     const hashPassword = await bcrypt.hash(user.clave, 10)
        //     user.clave = hashPassword
        //     this.empresaRepo.merge(user, changes);
        //     this.mailService.emailRecuperarClave(user.nombre, user.correo, clave)
        //     return this.empresaRepo.save(user);
        // } else {
        //     throw new NotFoundException(`No existe el correo en la plataforma.`);
        // }
    }

    async cambiarClave(changes: any) {
        // const user = await this.empresaService.findByEmail(changes.correo);
        // if (user) {
        //     const hashPassword = await bcrypt.hash(changes.clave, 10)
        //     user.clave = await hashPassword
        //     return this.empresaRepo.save(user);
        // } else {
        //     throw new NotFoundException(`No existe el correo en la plataforma.`);
        // }
    }

    async getMenu(idRol: number, idPlan: number){
        // console.log
        // const permisos: Permiso[] = await this.permisoRepo.find({
        //     relations: ["children", "children.subModulo"],
        //     where: [
        //         { idEmpresa: idEmpresa },
        //     ],
        // });
        // if (!permisos) {
        //     throw new NotFoundException(`Empresa #${idEmpresa} no encontrado`);
        // }
        // return permisos;
         
        // // const modulos: [] = await this.empresaRepo.query(`call devdujourmenu.sp_permisos(${idEmpresa}, ${idRol}, ${idPlan})`);
        // // const submodulos: any = await this.empresaRepo.query(`call devdujourmenu.sp_submodulos_empresa(${idEmpresa})`);
        // // modulos.forEach(res=>{
        // //     if (res["children"] == 1) {
        // //         const data = {
        // //             id: 'dashboard',
        // //             title: 'Dashboard',
        // //             type: 'basic',
        // //             icon: 'heroicons_outline:chart-pie',
        // //             children: submodulos
        // //         }
        // //         modulos.push(data)
        // //     }

        // // })
        if (idRol == 1) {
            const menu = [
                {
                    id: 'administracion',
                    title: 'Administración',
                    type: 'basic',
                    icon: 'heroicons_outline:office-building',
                    link: '/admin/empresas',
                },
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'basic',
                    icon: 'heroicons_outline:chart-pie',
                    link: '/admin/dashboard',
                },
                {
                    id: 'cuenta',
                    title: 'Cuenta',
                    type: 'basic',
                    icon: 'heroicons_outline:cog',
                    link: '/admin/configuracion',
                },
                {
                    id: 'menu',
                    title: 'Menú',
                    type: 'collapsable',
                    icon: 'heroicons_outline:clipboard-list',
                    link: '/admin/menu',
                },
            ];
            return menu;
        }
        
        if (idRol == 2) {
            const menu = [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'basic',
                    icon: 'heroicons_outline:chart-pie',
                    link: '/admin/dashboard',
                },
                {
                    id: 'cuenta',
                    title: 'Cuenta',
                    type: 'basic',
                    icon: 'heroicons_outline:cog',
                    link: '/admin/configuracion',
                },
                {
                    id: 'menu',
                    title: 'Menú',
                    type: 'basic',
                    icon: 'heroicons_outline:clipboard-list',
                    link: '/admin/menu',
                },
            ];
            return menu;
        }

    }

}
