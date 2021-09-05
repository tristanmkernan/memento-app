import { DateTime } from "luxon";

export type Memento = {
  id: string;
  category: MementoCategory;
  notes: string;
  location: string;

  created_at: DateTime;
  updated_at: DateTime;
};

export type MementoCategory = {
  id: string;
  name: string;

  created_at: DateTime;
  updated_at: DateTime;
};
