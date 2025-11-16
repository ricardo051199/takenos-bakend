import { Injectable } from '@nestjs/common';
import { CreateInfluencerDto } from './dto/create-influencer.dto';
import { UpdateInfluencerDto } from './dto/update-influencer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Influencer } from './entities/influencer.entity';

@Injectable()
export class InfluencerService {
  constructor(
    @InjectRepository(Influencer) private influencerRepository: Repository<Influencer>
  ) {}

  async create(createInfluencerDto: CreateInfluencerDto) {
    return this.influencerRepository.save(createInfluencerDto);
  }

  findAll() {
    return this.influencerRepository.find();
  }

  findOne(id: number) {
    return this.influencerRepository.findOneBy({ id });
  }

  update(id: number, updateInfluencerDto: UpdateInfluencerDto) {
    return `This action updates a #${id} influencer`;
  }

  remove(id: number) {
    return `This action removes a #${id} influencer`;
  }
}
