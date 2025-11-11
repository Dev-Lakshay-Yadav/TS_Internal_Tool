import { DataTypes, Model } from "sequelize";
import {
  Allocation_Attributes,
  Allocation_Creation_Attributes,
} from "../types/Allocations_Types.js";
import { sequelize } from "../config/database.js";

export class Allocation
  extends Model<Allocation_Attributes, Allocation_Creation_Attributes>
  implements Allocation_Attributes
{
  declare allocation_id: number;
  declare case_id: string;
  declare patient_name: string;
  declare status: string;
  declare allocated_by: string;
  declare allocated_to: string;
  declare attempt: number;
  declare allocated_units: number;
  declare expected_time: number;
  declare actual_time: number;
  declare start_time: Date;
  declare end_time: Date;
  declare created_at: Date;
  declare updated_at: Date;
}

Allocation.init(
  {
    allocation_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    case_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    patient_name: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    allocated_by: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    allocated_to: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    attempt: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    allocated_units: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    expected_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    actual_time: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.DATE,
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
    modelName: "Allocation",
    tableName: "Allocations",
    timestamps: false,
  }
);

export default Allocation;
