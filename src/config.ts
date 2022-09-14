import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_TYPE,
      port: process.env.DATABASE_PORT,
    },
    mssql: {
      dbName: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USERNAME,
      host: process.env.DATABASE_HOST,
    },
  };
});
