export interface Allocation_Attributes {
  allocation_id: number;
  case_id: string;
  patient_name: string;
  status: string;
  allocated_by: string;
  allocated_to: string;
  attempt: number;
  allocated_units: number;
  expected_time: number;
  actual_time: number;
  start_time: Date | null;
  end_time: Date | null;
  created_at: Date;
  updated_at: Date;
}

export type Allocation_Creation_Attributes = Omit<Allocation_Attributes, "allocation_id">;
