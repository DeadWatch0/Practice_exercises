import type {StrictMusicalNote, MusicalNote} from "./MusicalNote";

interface ApiResponse<T> {
  data: T | null;
  status: 'success' | 'error';
  errorMessage?: string;
}

type ChordResponse = ApiResponse<MusicalNote[]>;