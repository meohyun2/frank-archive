import { ExtendedRecordMap } from "notion-types";

export interface Category {
  name: string;
  color: string;
}

export interface Post {
  id: string;
  title: string;
  createdAt: string;
  lastUpdatedAt: string;
  category: Category[];
  recordMap: ExtendedRecordMap;
  cover?: string;
  startedAt?: string;
  endedAt?: string;
}
