import { Injectable } from '@nestjs/common';
import { CreateCampaniaDto } from './dto/create-campania.dto';
import { UpdateCampaniaDto } from './dto/update-campania.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Influencer } from '../influencer/entities/influencer.entity';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campania.entity';

@Injectable()
export class CampaniaService {
  constructor(
    @InjectRepository(Campaign) private campaniaRepository: Repository<Influencer>
  ) {}

  async create(createCampaniaDto: CreateCampaniaDto) {
    return this.campaniaRepository.save(createCampaniaDto);
  }

  findAll() {
    return this.campaniaRepository.find();
  }

  findOne(id: number) {
    return this.campaniaRepository.findOneBy({ id });
  }

  update(id: number, updateCampaniaDto: UpdateCampaniaDto) {
    return `This action updates a #${id} campania`;
  }

  remove(id: number) {
    return `This action removes a #${id} campania`;
  }
}
