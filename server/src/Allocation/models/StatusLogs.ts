import { DataTypes, Model } from "sequelize";
import {
  StatusLogs_Attributes,
  StatusLogs_Creation_Attributes,
} from "../types/StatusLogs_Types.js";
import { sequelize } from "../config/database.js";
import Allocation from "./Allocation.js";

export class StatusLogs
  extends Model<StatusLogs_Attributes, StatusLogs_Creation_Attributes>
  implements StatusLogs_Attributes
{
  declare id: number;
  declare allocation_id: number;
  declare status: string;
  declare changed_at: Date;
  declare changed_by: string;
  declare remarks: string;
  declare created_at: Date;
  declare updated_at: Date;
}
StatusLogs.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    allocation_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    changed_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    changed_by: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    remarks: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "StatusLogs",
    tableName: "StatusLogs",
    timestamps: false,
  }
);

StatusLogs.belongsTo(Allocation, { foreignKey: "allocation_id" });
Allocation.hasMany(StatusLogs, { foreignKey: "allocation_id" });

export default StatusLogs;
