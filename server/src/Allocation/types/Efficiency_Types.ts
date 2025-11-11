export interface Efficiency_Attributes {
  id: number;
  emp_id: number;
  month_year: string;
  total_units_allocated: number;
  total_units_completed: number;
  total_time_spent: number;
  created_at: Date;
  updated_at: Date;
}

export type Efficiency_Creation_Attributes = Omit<Efficiency_Attributes, "id">;
