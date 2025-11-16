import { Metric } from 'src/resources/metrica/entities/metrica.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('influencer')
export class Influencer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  takeCode: string;

  @Column({ nullable: true })
  instagramUsername: string;

  @Column({ nullable: true })
  facebookUsername: string;

  @Column({ nullable: true })
  tiktokUsername: string;

  @Column({ nullable: true })
  youtubeUsername: string;

  @OneToMany(() => Metric, (metric) => metric.influencer)
  metrics: Metric[];
}