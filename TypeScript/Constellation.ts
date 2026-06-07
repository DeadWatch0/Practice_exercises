import type { StrictMusicalNote } from "./MusicalNote";

type Constellation<T extends string> = { [key in T] : {
    note: StrictMusicalNote, 
    fretboardPositions: [stringNumber: number, fretNumber: number][]
    }
};