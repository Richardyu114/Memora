export type RecordKind = "memory" | "skill" | "soul" | "session_summary" | "agent_note";
export type RecordState = "raw" | "candidate" | "canonical" | "archived" | "quarantined";
export type RecordScope = "global" | "project" | "topic" | "session" | "artifact";
export type RecordPriority = "low" | "normal" | "high";
export type RecordVisibility = "active" | "archived" | "quarantined";

export interface RecordContent {
  text?: string;
  format?: "text" | "json";
  [key: string]: unknown;
}

export interface RecordSource {
  client: string;
  session_id?: string;
  model?: string;
  device_id?: string;
}

export interface RecordProvenance {
  derived_from?: string[];
  reason?: string;
}

export interface MemoraRecord {
  id: string;
  kind: RecordKind;
  type: string;
  scope: RecordScope;
  project_id?: string;
  tags: string[];
  content: RecordContent;
  state: RecordState;
  confidence: number;
  priority: RecordPriority;
  visibility: RecordVisibility;
  created_at: string;
  updated_at: string;
  source: RecordSource;
  provenance?: RecordProvenance;
}
