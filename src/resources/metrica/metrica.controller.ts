import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetricaService } from './metrica.service';
import { CreateMetricaDto } from './dto/create-metrica.dto';
import { UpdateMetricaDto } from './dto/update-metrica.dto';

@Controller('metrica')
export class MetricaController {
  constructor(private readonly metricaService: MetricaService) {}

  @Post()
  create(@Body() createMetricaDto: CreateMetricaDto) {
    return this.metricaService.create(createMetricaDto);
  }

  @Get()
  findAll() {
    return this.metricaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metricaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetricaDto: UpdateMetricaDto) {
    return this.metricaService.update(+id, updateMetricaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metricaService.remove(+id);
  }
}
