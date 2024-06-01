import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { entities } from '../shared/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([...entities], 'notas-db')],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
