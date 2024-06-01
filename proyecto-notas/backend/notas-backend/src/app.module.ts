import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NotasModule } from './notas/notas.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [AutenticacionModule, UsuariosModule, NotasModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
