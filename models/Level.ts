// models/Level.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Level extends Model {
  public id!: string;
  public type!: string;
  public description!: string;
  public rank!: number;
  public status!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static async findByRank(rank: number): Promise<Level | null> {
    return Level.findOne({ where: { rank } });
  }
}



Level.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Level',
    tableName: 'levels', // Specify the table name
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

export default Level;
