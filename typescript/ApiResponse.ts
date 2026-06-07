import type { StrictMusicalNote, MusicalNote } from "./MusicalNote";

export interface ApiResponse<T> {
  data: T | null;
  status: 'success' | 'error';
  errorMessage?: string;
}

type ChordResponse = ApiResponse<MusicalNote[]>;