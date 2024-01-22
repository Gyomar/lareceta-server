import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { EncuestasModule } from './modules/encuestas/encuestas.module';
import { DatabaseModule } from './modules/database/database.module';

import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        DB_URL: Joi.string().required(),
        API_KEY: Joi.string().required(),
      }),
    }),
    EncuestasModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
