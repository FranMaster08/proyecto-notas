// src/usuarios/dto/create-usuario.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUsuarioDto {
  @ApiProperty({
    description: 'Nombre del usuario',
    example: 'Juan Perez',
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 45)
  usuarioNombre: string;

  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'juan.perez@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  usuarioEmail: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    example: 'password123',
  })
  @IsString()
  @IsNotEmpty()
  @Length(6, 45)
  usuarioPassword: string;

  @ApiProperty({
    description: 'ID del rol del usuario',
    example: 1,
  })
  @IsNotEmpty()
  rolesRolId: number;
}
