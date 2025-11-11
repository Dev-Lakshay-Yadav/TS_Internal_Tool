export interface StatusLogs_Attributes {
  id: number;
  allocation_id: number;
  status: string;
  changed_at: Date;
  changed_by: string;
  remarks: string;
  created_at: Date;
  updated_at: Date;
}

export type StatusLogs_Creation_Attributes = Omit<StatusLogs_Attributes, "id">;
