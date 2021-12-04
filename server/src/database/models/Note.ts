import * as Sequelize from 'sequelize';
import {
  NoteInstance,
  NoteAttributes,
  SequelizeAttributes,
} from '../../types/models';

export const NoteModel = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<NoteInstance, NoteAttributes> => {
  const attributes: SequelizeAttributes<NoteAttributes> = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  };

  const Note = sequelize.define<NoteInstance, NoteAttributes>(
    'note',
    attributes
  );

  Note.associate = (models) => {
    // 1:M
    Note.belongsTo(models.User, {
      foreignKey: { name: 'user_id', field: 'user_id' },
    });

    // 1:M
    Note.belongsTo(models.Category, {
      foreignKey: { name: 'category_id', field: 'category_id' },
    });
  };

  return Note;
};
