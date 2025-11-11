export interface ReadyCases_Attributes {
  id: number;
  case_id: string;
  case_type: string;
  attempt: number;
  service_type: string;
  patient_name: string;
  lab_token: string; 
  dateFolder: string;
  status: string;
  priority: string;
  case_units: number;
  designer_units: number;
  created_at: Date;
  updated_at: Date;
}

export type ReadyCases_Creation_Attributes = Omit<ReadyCases_Attributes, "id">;
