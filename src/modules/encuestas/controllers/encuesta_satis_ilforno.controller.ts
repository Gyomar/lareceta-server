import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { CreateEncuesSatisIlfornoDto } from '../dtos/encuesta_satis_ilforno.dtos';
import { EncuesSatisIlfornoService } from '../services/encuesta_satis_ilforno.service';
import { ApiKeyGuard } from '../../auth/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@ApiTags('Encuesta Satisfaccion Ilforno')
@Controller('encues-satis-ilforno')
export class EncuesSatisIlfornoController {
  constructor(private encuesSatisIlfornoService: EncuesSatisIlfornoService) {}

  @ApiOperation({ summary: 'Crear Encuesta' })
  @Post()
  create(@Body() payload: CreateEncuesSatisIlfornoDto) {
    return this.encuesSatisIlfornoService.create(payload);
  }
}
