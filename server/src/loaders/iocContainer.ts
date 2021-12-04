import { Container } from 'typedi';
import { Sequelize } from 'sequelize';
import { IModels } from '../types/models';
import { AnyKeys } from 'mongoose';

type Props = {
  models?: IModels;
  sequelize?: Sequelize;
  logger: any;
};

const iocContainerLoader = async ({ models, sequelize, logger }: Props) => {
  try {
    Container.set('models', models);
    Container.set('sequelize', sequelize);
    Container.set('sequelize', logger);
  } catch (error: any) {
    logger.error('😱 Failed to load dependency injector');
    throw new Error(error);
  }
};

export default iocContainerLoader;
