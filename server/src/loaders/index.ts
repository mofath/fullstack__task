import { Application } from 'express';
import iocContainerLoader from './iocContainer';
import sequelizeLoader from './sequelize';
import expressLoader from './express';
import redisLoader from './redis';
import { logger } from '../lib';

const loader = async (app: Application) => {
  try {
    const { models, sequelize } = await sequelizeLoader();
    logger.info(`🪂 Sequelize loaded successfully`);

    const redisClient = await redisLoader(logger);
    logger.info(`🛸️ Redis loaded successfully`);

    await iocContainerLoader({ models, sequelize, logger, redisClient });
    logger.info(`🚀 Dependency Injector loaded successfully`);

    await expressLoader(app);
    logger.info('💯 Express loaded successfully');
  } catch (error: any) {
    logger.error(error);
  }
};

export default loader;
