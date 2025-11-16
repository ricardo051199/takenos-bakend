  import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
  import { Influencer } from '../../influencer/entities/influencer.entity';
  import { Campaign } from '../../campania/entities/campania.entity';

  @Entity('metric')
  export class Metric {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'date' })
    startDate: string;

    @Column({ type: 'date' })
    endDate: string;

  @Column({ type: 'text', nullable: true })
    socialMedia: string;

    @Column({ type: 'int', default: 0 })
    views: number;

    @Column({ type: 'int', default: 0 })
    likes: number;

    @Column({ type: 'int', default: 0 })
    comments: number;

    @Column({ type: 'int', default: 0 })
    shares: number;

    @Column({ type: 'int', default: 0 })
    saves: number;

    @Column({ type: 'int', default: 0 })
    engagements: number;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Influencer, (influencer) => influencer.metrics)
    @JoinColumn({ name: 'influencerId' })
    influencer: Influencer;

    @ManyToOne(() => Campaign, (campaign) => campaign.metrics)
    @JoinColumn({ name: 'campaignId' })
    campaign: Campaign;
  }