import { DataTypes, Model } from "sequelize";
import {
  Employee_Attributes,
  Employee_Creation_Attributes,
} from "../types/Employee_Types.js";
import { sequelize } from "../config/database.js";

export class Employee
  extends Model<Employee_Attributes, Employee_Creation_Attributes>
  implements Employee_Attributes
{
  declare emp_id: number;
  declare email: string;
  declare emp_name: string;
  declare password: string;
  declare role: string;
  declare verified: boolean;
  declare efficiency: number; // number of units per day
}

Employee.init(
  {
    emp_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
    },
    emp_name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false,
      // unique: true,
    },
    role: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    efficiency: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Employee",
    tableName: "Employee",
    timestamps: false,
  }
);

export default Employee;
