export interface Employee_Attributes {
  emp_id: number;
  email: string;
  emp_name: string;
  password: string;
  role: string;
  verified: boolean;
  efficiency: number;
}

export type Employee_Creation_Attributes = Omit<Employee_Attributes, "emp_id">;