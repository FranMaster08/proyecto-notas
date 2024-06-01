import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuarios } from './Usuarios';

@Index('fk_notas_usuarios1_idx', ['usuariosUsuarioId'], {})
@Entity('notas', { schema: 'notas-db' })
export class Notas {
  @PrimaryGeneratedColumn({ type: 'int', name: 'nota_id' })
  notaId: number;

  @Column('text', { name: 'nota_contenido', nullable: true })
  notaContenido: string | null;

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

  @Column('int', { name: 'usuarios_usuario_id' })
  usuariosUsuarioId: number;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.notas, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([
    { name: 'usuarios_usuario_id', referencedColumnName: 'usuarioId' },
  ])
  usuariosUsuario: Usuarios;
}
