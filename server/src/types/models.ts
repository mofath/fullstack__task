import * as Sequelize from 'sequelize';
import { IObjectKeys } from './general';

export type SequelizeAttribute =
  | string
  | Sequelize.DataTypeAbstract
  | Sequelize.DefineAttributeColumnOptions;

export type SequelizeAttributes<T extends { [key: string]: any }> = {
  [P in keyof T]: SequelizeAttribute;
};

/**
 * User
 */
export interface UserAttributes {
  id?: string;
  email?: string;
  is_email_verified?: boolean;
  username?: string;
  password?: string;
  avatar_url?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface UserInstance
  extends Sequelize.Instance<UserAttributes>,
    UserAttributes {}

/**
 * Category
 */
export interface CategoryAttributes {
  id?: string;
  name?: string;
}

export interface CategoryInstance
  extends Sequelize.Instance<CategoryAttributes>,
    CategoryAttributes {}

/**
 * Note
 */
export interface NoteAttributes {
  id?: string;
  title: string;
  description: string;
  category_id?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface NoteInstance
  extends Sequelize.Instance<NoteAttributes>,
    NoteAttributes {}

export interface IModels extends IObjectKeys {
  Category: Sequelize.Model<CategoryInstance, CategoryAttributes>;
  Note: Sequelize.Model<NoteInstance, NoteAttributes>;
  User: Sequelize.Model<UserInstance, UserAttributes>;
}
