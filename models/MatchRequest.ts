// models/MatchRequest.ts

import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
// import Match from './Match'; // Importing Match model if needed
// import Team from './Team'; // Importing Team model if needed

class MatchRequest extends Model {
  public id!: string;
  public match_id!: string;
  public team_id!: string;
  public user_id!: string;
  public status!: string;

    // Timestamps
  public createdAt!: Date;
  public updatedAt!: Date;
}

MatchRequest.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    teamId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'team_id'
    },
    matchId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'match_id'
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'user_id'
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'MatchRequest',
    tableName: 'match_requests', // Specify the table name
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

// Define associations if needed
// MatchRequest.belongsTo(Match, { foreignKey: 'matchId' });
// MatchRequest.belongsTo(Team, { foreignKey: 'requestingTeamId' });

export default MatchRequest;
