import { Injectable } from '@nestjs/common';
import { CreateMetricaDto } from './dto/create-metrica.dto';
import { UpdateMetricaDto } from './dto/update-metrica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Metric } from './entities/metrica.entity';
import { Influencer } from '../influencer/entities/influencer.entity';
import { Campaign } from '../campania/entities/campania.entity';

@Injectable()
export class MetricaService {
constructor(
    @InjectRepository(Metric)
    private metricRepository: Repository<Metric>,
    
    @InjectRepository(Influencer)
    private influencerRepository: Repository<Influencer>,
    
    @InjectRepository(Campaign)
    private campaignRepository: Repository<Campaign>,
  ) {}

  async create(createMetricaDto: CreateMetricaDto) {
    return this.metricRepository.save(createMetricaDto);
  }

  findAll() {
    return this.metricRepository.find();
  }

  findOne(id: number) {
    return this.metricRepository.findOneBy({ id });
  }

  update(id: number, updateMetricaDto: UpdateMetricaDto) {
    return `This action updates a #${id} metrica`;
  }

  remove(id: number) {
    return `This action removes a #${id} metrica`;
  }
}
