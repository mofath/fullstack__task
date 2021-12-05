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
  MONGODB_URI: process.env.MONGODB_URI as string,
  LOGGING_DB_URI: process.env.LOGGING_DB_URI as string,
  SALT_FACTOR: parseInt(process.env.SALT_FACTOR as string) || 10,
  SEQUELIZE_CONFIG: sequelizeConfig[process.env.NODE_ENV as string],
  MAIL_PORT: 587,
  MAIL_HOST: 'smtp.ethereal.email',
  MAILER_USER: process.env.MAILER_USER as string,
  MAILER_PASS: process.env.MAILER_PASS as string,
  MAIL_FROM: 'CreditGo',
};
