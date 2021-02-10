import dotenv from 'dotenv';

import databaseConfig from './database.config';

dotenv.config();
const env = process.env.NODE_ENV || 'development';
console.log('🔷 NODE_ENV:', env);

export default {
  db: databaseConfig,
  JWT_SECRET: process.env.JWT_SECRET,
};