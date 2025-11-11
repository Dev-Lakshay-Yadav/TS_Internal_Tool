import { DataTypes, Model } from "sequelize";
import {
  ReadyCases_Attributes,
  ReadyCases_Creation_Attributes,
} from "../types/ReadyCases_Types.js";
import { sequelize } from "../config/database.js";
import Allocation from "./Allocation.js";

export class ReadyCases
  extends Model<ReadyCases_Attributes, ReadyCases_Creation_Attributes>
  implements ReadyCases_Attributes
{
  declare id: number;
  declare case_id: string;
  declare case_type: string;
  declare attempt: number;
  declare service_type: string;
  declare patient_name: string;
  declare lab_token: string;
  declare dateFolder: string;
  declare status: string;
  declare priority: string;
  declare case_units: number;
  declare designer_units: number;
  declare created_at: Date;
  declare updated_at: Date;
}

ReadyCases.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    case_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    case_type: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    attempt: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    service_type: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    patient_name: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    lab_token: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    dateFolder: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(64),
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING(16),
      allowNull: true,
    },
    case_units: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    designer_units: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
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
    modelName: "ReadyCases",
    tableName: "ReadyCases",
    timestamps: false,
  }
);

ReadyCases.hasMany(Allocation, { foreignKey: "case_id", sourceKey: "case_id" });
Allocation.belongsTo(ReadyCases, {
  foreignKey: "case_id",
  targetKey: "case_id",
});

export default ReadyCases;
