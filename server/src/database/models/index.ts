import * as Sequelize from 'sequelize';
import { IModels } from '../../types/models';
import { CategoryModel } from './Category';
import { NoteModel } from './Note';
import { UserModel } from './User';

export const createModels = (sequelize: Sequelize.Sequelize): IModels => {
  /**
   * Register models here
   * and sort alphabetically, please
   */
  const models: IModels = {
    Category: CategoryModel(sequelize, Sequelize),
    Note: NoteModel(sequelize, Sequelize),
    User: UserModel(sequelize, Sequelize),
  };

  Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName as any]) {
      models[modelName as any].associate(models);
    }
  });

  return models;
};
