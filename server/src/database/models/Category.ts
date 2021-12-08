import * as Sequelize from 'sequelize';
import {
  CategoryInstance,
  CategoryAttributes,
  SequelizeAttributes,
} from '../../types/models';

export const CategoryModel = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<CategoryInstance, CategoryAttributes> => {
  const attributes: SequelizeAttributes<CategoryAttributes> = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  };

  const Category = sequelize.define<CategoryInstance, CategoryAttributes>(
    'category',
    attributes,
    {
      timestamps: false,
    }
  );

  return Category;
};
