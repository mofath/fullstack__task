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
  const { database, username, password, params } = SEQUELIZE_CONFIG;

  try {
    const sequelize = new Sequelize(database, username, password, params);

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
