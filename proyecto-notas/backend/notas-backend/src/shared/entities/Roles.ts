import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuarios } from './Usuarios';

@Index('rol_nombre_UNIQUE', ['rolNombre'], { unique: true })
@Entity('roles', { schema: 'notas-db' })
export class Roles {
  @PrimaryGeneratedColumn({ type: 'int', name: 'rol_id' })
  rolId: number;

  @Column('varchar', {
    name: 'rol_nombre',
    nullable: true,
    unique: true,
    length: 45,
  })
  rolNombre: string | null;

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

  @OneToMany(() => Usuarios, (usuarios) => usuarios.rolesRol)
  usuarios: Usuarios[];
}
