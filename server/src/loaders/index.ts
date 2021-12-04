import { Application } from 'express';
import iocContainerLoader from './iocContainer';
import sequelizeLoader from './sequelize';
import expressLoader from './express';
import { logger } from '../lib';

const loader = async (app: Application) => {
  try {
    const { models, sequelize } = (await sequelizeLoader()) || {};
    logger.info(`🪂 Sequelize loaded successfully`);

    await iocContainerLoader({ models, sequelize, logger });
    logger.info(`🚀 Dependency Injector loaded successfully`);

    await expressLoader(app);
    logger.info('💯 Express loaded successfully');
  } catch (error: any) {
    logger.error(error);
  }
};

export default loader;
