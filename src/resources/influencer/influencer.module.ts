import { Module } from '@nestjs/common';
import { InfluencerService } from './influencer.service';
import { InfluencerController } from './influencer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Influencer } from './entities/influencer.entity';

@Module({
  controllers: [InfluencerController],
  providers: [InfluencerService],
  imports: [TypeOrmModule.forFeature([Influencer])],
})
export class InfluencerModule {}
