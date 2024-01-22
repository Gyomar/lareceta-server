import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

export default registerAs('config', () => {
  return {
    env: process.env.NODE_ENV || 'dev',
    database: {
      dbUrl: process.env.DB_URL,
    },
    apiKey: process.env.API_KEY,
  };
});
