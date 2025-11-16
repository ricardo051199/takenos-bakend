import { Module } from '@nestjs/common';
import { MetricaService } from './metrica.service';
import { MetricaController } from './metrica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metric } from './entities/metrica.entity';
import { InfluencerController } from '../influencer/influencer.controller';
import { InfluencerService } from '../influencer/influencer.service';
import { CampaniaController } from '../campania/campania.controller';
import { CampaniaService } from '../campania/campania.service';
import { InfluencerModule } from '../influencer/influencer.module';
import { CampaniaModule } from '../campania/campania.module';
import { Influencer } from '../influencer/entities/influencer.entity';
import { Campaign } from '../campania/entities/campania.entity';

@Module({
  controllers: [MetricaController],
  providers: [MetricaService],
  imports: [TypeOrmModule.forFeature([Metric, Influencer, Campaign])],
})
export class MetricaModule {}
