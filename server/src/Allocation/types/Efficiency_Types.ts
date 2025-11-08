export interface Efficiency_Attributes {
  id: number;
  emp_id: number;
  lab: string;
  case_id: string;
  units_allocated: string;
  units_completed: string;
  month: string;
}

export type Efficiency_Creation_Attributes = Omit<Efficiency_Attributes, "id">;
