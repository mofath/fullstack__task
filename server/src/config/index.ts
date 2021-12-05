import dotenv from 'dotenv';
import sequelizeConfig from './sequelize-config.json';

const envFound = dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

if (envFound.error) {
  // This error should crash whole process
  throw new Error(`⚠️ Couldn't fin .env.${process.env.NODE_ENV} file ⚠️`);
}

export default {
  ENV: process.env.NODE_ENV as string,
  PORT: parseInt(process.env.PORT as string, 10) || 5000,
  SALT_FACTOR: parseInt(process.env.SALT_FACTOR as string) || 10,
  SEQUELIZE_CONFIG: sequelizeConfig[process.env.NODE_ENV as string],
  MAILER: {
    PORT: 587,
    HOST: 'smtp.ethereal.email',
    USER: process.env.MAILER_USER as string,
    PASS: process.env.MAILER_PASS as string,
    FROM: 'CreditGo',
  },
  REDIS: {
    HOST: 'localhost',
    PORT: 8089,
  },
};
