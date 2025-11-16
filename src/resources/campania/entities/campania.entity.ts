import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Metric } from '../../metrica/entities/metrica.entity';

@Entity('campaign')
export class Campaign {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  client: string;

  @Column({ type: 'date' })
  startDate: string;

  @Column({ type: 'date' })
  endDate: string;

  @Column({ default: 'planned' })
  status: string;

  @OneToMany(() => Metric, (metric) => metric.influencer)
  metrics: Metric[];
}