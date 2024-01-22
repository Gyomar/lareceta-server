import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EncuesSatisIlfornoController } from './controllers/encuesta_satis_ilforno.controller';
import { EncuesSatisIlfornoService } from './services/encuesta_satis_ilforno.service';
import { EncuesSatisIlforno } from './entities/encuesta_satis_ilforno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EncuesSatisIlforno])],
  controllers: [EncuesSatisIlfornoController],
  providers: [EncuesSatisIlfornoService],
})
export class EncuestasModule {}
