import Sequelize from 'sequelize';
import config from '../config';
import { logger } from '../lib';
import { createModels } from '../database/models';
import { IModels } from '../types/models';

const { SEQUELIZE_CONFIG } = config;

export interface sequelizeLoaderRes {
  models: IModels;
  sequelize: Sequelize.Sequelize;
}

async function sequelizeLoader(): Promise<sequelizeLoaderRes> {
  const { database, username, password, host, dialect } = SEQUELIZE_CONFIG;

  try {
    const sequelize = new Sequelize(database, username, password, {
      host,
      dialect,
      port: 3306,
      dialectOptions: {
        multipleStatements: true,
      },
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
      logging: false,
    });

    const models = createModels(sequelize);

    await sequelize.sync();

    return {
      models,
      sequelize,
    };
  } catch (error: any) {
    logger.error('😱 Failed to load sequelize');
    throw new Error(error);
  }
}

export default sequelizeLoader;
