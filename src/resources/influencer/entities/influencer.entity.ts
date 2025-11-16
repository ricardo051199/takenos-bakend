import { Metric } from 'src/resources/metrica/entities/metrica.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('influencer')
export class Influencer {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  photo: string;

  @Column()
  platform: string;

  @Column('bigint')
  followers: number;

  @Column('bigint')
  views: number;

  @Column('decimal', { precision: 5, scale: 2 })
  engagement: number;

  @Column()
  category: string;

  @Column('decimal', { precision: 5, scale: 2 })
  growthRate: number;

  @Column({ default: '' })
  instagram: string;

  @Column({ default: '' })
  facebook: string;

  @Column({ default: '' })
  tiktok: string;

  @Column({ default: '' })
  youtube: string;

  @OneToMany(() => Metric, (metric) => metric.influencer)
  metrics: Metric[];
}