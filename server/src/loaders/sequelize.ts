import Sequelize from 'sequelize';
import config from '../config';
import { logger } from '../lib';

const { SEQUELIZE_CONFIG } = config;

export interface sequelizeLoaderRes {
  sequelize: Sequelize.Sequelize;
}

async function sequelizeLoader(): Promise<sequelizeLoaderRes | undefined> {
  const { database, username, password, params } = SEQUELIZE_CONFIG;

  try {
    const sequelize = new Sequelize(database, username, password, params);

    await sequelize.sync();

    return {
      sequelize,
    };
  } catch (error: any) {
    logger.error('😱 Failed to load sequelize: ', error.message);
    logger.error(error);
  }
}

export default sequelizeLoader;
