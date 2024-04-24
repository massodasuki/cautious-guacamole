// models/MatchRequest.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
// import Match from './Match'; // Importing Match model if needed
// import Team from './Team'; // Importing Team model if needed

class MatchRequest extends Model {
  public id!: number;
  public matchId!: number;
  public requestingTeamId!: number;
  public status!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Define associations if needed
  // public match?: Match;
  // public requestingTeam?: Team;
}

MatchRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    matchId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    requestingTeamId: {
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
    modelName: 'MatchRequest',
    tableName: 'match_requests', // Specify the table name
  }
);

// Define associations if needed
// MatchRequest.belongsTo(Match, { foreignKey: 'matchId' });
// MatchRequest.belongsTo(Team, { foreignKey: 'requestingTeamId' });

export default MatchRequest;
