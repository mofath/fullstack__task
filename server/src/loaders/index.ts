import { Application } from 'express';
import iocContainerLoader from './iocContainer';
import sequelizeLoader from './sequelize';
import { logger } from '../lib';
import expressLoader from './express';

const loader = async (app: Application) => {
  try {
    await sequelizeLoader();
    logger.info(`🪂 Sequelize loaded successfully`);

    await iocContainerLoader();
    logger.info(`🚀 Dependency Injector loaded successfully`);

    await expressLoader(app);
    logger.info('💯 Express loaded successfully');
  } catch (error: any) {
    logger.error(error.message);
    logger.error(error);
  }
};

export default loader;
