import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 't001_encues_satis_ilforno' })
export class EncuesSatisIlforno {
  @PrimaryGeneratedColumn({ type: 'int', name: 'c001_filaid' })
  filaid: number;

  @Column({ type: 'varchar', name: 'c001_id' })
  id: string;

  @Column({ type: 'varchar', nullable: false, name: 'c001_punto_venta' })
  puntoVenta: string;

  @Column({ type: 'int', nullable: false, name: 'c001_calificacion_producto' })
  calificaProducto: number;

  @Column({ type: 'int', nullable: false, name: 'c001_calificacion_servicio' })
  calificaServicio: number;

  @Column({ type: 'int', nullable: false, name: 'c001_calificacion_nps' })
  calificaNps: number;

  @Column({ type: 'varchar', nullable: true, name: 'c001_mejora' })
  mejora: string;

  @Column({ type: 'text', nullable: true, name: 'c001_nota' })
  nota: string;

  @Column({ type: 'varchar', nullable: true, name: 'c001_nombre' })
  nombre: string;

  @Column({ type: 'varchar', nullable: true, name: 'c001_apellido' })
  apellido: string;

  @Column({ type: 'bigint', nullable: true, name: 'c001_cedula' })
  cedula: number;

  @Column({ type: 'bigint', nullable: true, name: 'c001_celular' })
  celular: number;

  @Column({ type: 'varchar', nullable: true, name: 'c001_email' })
  email: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'c001_fecha',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha: Date;
}
