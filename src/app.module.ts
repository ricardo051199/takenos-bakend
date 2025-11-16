import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { InfluencerModule } from './resources/influencer/influencer.module';
import { MetricaModule } from './resources/metrica/metrica.module';
import { CampaniaModule } from './resources/campania/campania.module';
import { UserModule } from './resources/user/user.module';

@Module({
  imports: [
    InfluencerModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'takenos',
      synchronize: true,
      autoLoadEntities: true,
    }),
    InfluencerModule,
    MetricaModule,
    CampaniaModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
