import type {StrictMusicalNote} from "./MusicalNote";

export interface IPracticeDrillDocument {
  _id: string;
  title: string;
  rootNote: StrictMusicalNote;
  intervals: number[];
}

/* using mapped types option
type sanitizedDocument = {[key in keyof PracticeDrillDocument as key extends '_id' ? 'id' : key]: IPracticeDrillDTO[key]};

interface PracticeDrillDTO extends sanitizedDocumen {}; 
*/

export type PracticeDrillDTO = Omit<IPracticeDrillDocument, '_id'> & <id: string>