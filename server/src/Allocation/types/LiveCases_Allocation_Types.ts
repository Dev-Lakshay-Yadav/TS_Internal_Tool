export interface LiveCases_Allocation_Attributes {
  emp_id: number;
  email: string;
  emp_name: string;
  password: string;
  role: string;
  verified: boolean;
  efficiency: number;
}

export type LiveCases_Allocation_Creation_Attributes = Omit<
  LiveCases_Allocation_Attributes,
  "emp_id"
>;
