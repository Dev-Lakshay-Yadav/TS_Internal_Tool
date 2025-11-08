import { DataTypes, Model } from "sequelize";
import {
  Efficiency_Attributes,
  Efficiency_Creation_Attributes,
} from "../types/Efficiency_Types.js";
import { sequelize } from "../config/database.js";

export class Efficiency
  extends Model<Efficiency_Attributes, Efficiency_Creation_Attributes>
  implements Efficiency_Attributes
{
  declare id: number;
  declare emp_id: number;
  declare lab: string;
  declare case_id: string;
  declare units_allocated: string;
  declare units_completed: string;
  declare month: string;
}

Efficiency.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    emp_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    lab: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    case_id: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    units_allocated: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    units_completed: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    month: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Efficiency",
    tableName: "Efficiency",
    timestamps: false,
  }
);

export default Efficiency;
