import { Test, TestingModule } from '@nestjs/testing';
import { MetricaController } from './metrica.controller';
import { MetricaService } from './metrica.service';

describe('MetricaController', () => {
  let controller: MetricaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetricaController],
      providers: [MetricaService],
    }).compile();

    controller = module.get<MetricaController>(MetricaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
