import * as Sequelize from 'sequelize';
import {
  UserInstance,
  UserAttributes,
  SequelizeAttributes,
} from '../../types/models';

export interface Model extends Sequelize.Model<UserInstance, UserAttributes> {
  prototype?: {
    verifyPassword: (password: string) => boolean;
  };
}

export const UserModel = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Model => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
    },
    is_email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    username: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    avatar_url: {
      type: DataTypes.STRING,
      defaultValue:
        'encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH59pn5cN38DTO5T8F2BSQmBOU2tl7xWLL1TgmKXUQbsRUR8ak8eTYepSOpUHmmPaYyDo&usqp=CAU',
      validate: {
        len: {
          args: [0, 1023],
          msg: 'The length cannot be longer than 1024 characters',
        },
      },
    },
  };

  const User = sequelize.define<UserInstance, UserAttributes>(
    'user',
    attributes
  );

  User.associate = (models) => {
    // M:1
    User.hasMany(models.Category);
  };

  return User;
};
