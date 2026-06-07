type StrictMusicalNote = 'A'| 'B'| 'C'| 'D'| 'E'| 'F' | 'G';

interface MusicalNote {
    pitch: StrictMusicalNote;
    readonly octave: number;
    frequency?: number;

    play(): void;
}