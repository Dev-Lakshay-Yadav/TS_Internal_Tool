import { DataTypes, Model } from "sequelize";
import {
  Efficiency_Attributes,
  Efficiency_Creation_Attributes,
} from "../types/Efficiency_Types.js";
import { sequelize } from "../config/database.js";
import Employee from "./Employee.js";

export class Efficiency
  extends Model<Efficiency_Attributes, Efficiency_Creation_Attributes>
  implements Efficiency_Attributes
{
  declare id: number;
  declare emp_id: number;
  declare month_year: string;
  declare total_units_allocated: number;
  declare total_units_completed: number;
  declare total_time_spent: number;
  declare created_at: Date;
  declare updated_at: Date;
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
    month_year: {
      type: DataTypes.STRING(8),
      allowNull: false,
    },
    total_units_allocated: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    total_units_completed: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    total_time_spent: {
      type: DataTypes.BIGINT.UNSIGNED,
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
    modelName: "Efficiency",
    tableName: "Efficiency",
    timestamps: false,
  }
);

Efficiency.belongsTo(Employee, { foreignKey: "emp_id" });
Employee.hasMany(Efficiency, { foreignKey: "emp_id" });

export default Efficiency;
