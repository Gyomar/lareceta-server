import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { EncuesSatisIlforno } from '../entities/encuesta_satis_ilforno.entity';
import { CreateEncuesSatisIlfornoDto } from '../dtos/encuesta_satis_ilforno.dtos';

@Injectable()
export class EncuesSatisIlfornoService {
  constructor(
    @InjectRepository(EncuesSatisIlforno)
    private encuesSatisIlfornoRepo: Repository<EncuesSatisIlforno>,
  ) {}

  create(data: CreateEncuesSatisIlfornoDto) {
    const newEncuesSatisIlforno = this.encuesSatisIlfornoRepo.create(data);
    return this.encuesSatisIlfornoRepo.save(newEncuesSatisIlforno);
  }
}
