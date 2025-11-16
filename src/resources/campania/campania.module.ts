// src/campania/campania.module.ts
import { Module } from '@nestjs/common';
import { CampaniaService } from './campania.service';
import { CampaniaController } from './campania.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from './entities/campania.entity';

@Module({
  controllers: [CampaniaController],
  providers: [CampaniaService],
  imports: [TypeOrmModule.forFeature([Campaign])],
})
export class CampaniaModule {}