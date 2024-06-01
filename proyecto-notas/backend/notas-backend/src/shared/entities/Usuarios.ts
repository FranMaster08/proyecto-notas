import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Notas } from './Notas';
import { Roles } from './Roles';

@Index('fk_usuarios_roles_idx', ['rolesRolId'], {})
@Index('usuario_email_UNIQUE', ['usuarioEmail'], { unique: true })
@Entity('usuarios', { schema: 'notas-db' })
export class Usuarios {
  @PrimaryGeneratedColumn({ type: 'int', name: 'usuario_id' })
  usuarioId: number;

  @Column('varchar', { name: 'usuario_nombre', length: 45 })
  usuarioNombre: string;

  @Column('varchar', { name: 'usuario_email', unique: true, length: 45 })
  usuarioEmail: string;

  @Column('varchar', { name: 'usuario_password', length: 45 })
  usuarioPassword: string;

  @Column('timestamp', {
    name: 'creado_en',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  creadoEn: Date | null;

  @Column('timestamp', {
    name: 'actualizado_en',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  actualizadoEn: Date | null;

  @Column('int', { name: 'roles_rol_id' })
  rolesRolId: number;

  @OneToMany(() => Notas, (notas) => notas.usuariosUsuario)
  notas: Notas[];

  @ManyToOne(() => Roles, (roles) => roles.usuarios, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'roles_rol_id', referencedColumnName: 'rolId' }])
  rolesRol: Roles;
}
