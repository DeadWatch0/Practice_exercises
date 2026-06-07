import type {StrictMusicalNote} from "./MusicalNote";

interface PracticeDrillDocument {
  _id: string;
  title: string;
  rootNote: StrictMusicalNote;
  intervals: number[];
}

/* using mapped types option
type sanitizedDocument = {[key in keyof PracticeDrillDocument as key extends '_id' ? 'id' : key]: PracticeDrillDTO[key]};

interface PracticeDrillDTO extends sanitizedDocumen {}; 
*/

type PracticeDrillDTO = Omit<PracticeDrillDocument, '_id'> & <id: string>