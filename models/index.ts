export type Memento = {
  id: string;
  category: MementoCategory;
  notes: string;
  location: string;

  created_at: string;
  updated_at: string;
};

export type MementoCategory = {
  id: string;
  name: string;

  created_at: string;
  updated_at: string;
};
