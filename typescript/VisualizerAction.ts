import type {StrictMusicalNote} from "./MusicalNote";

type VisualizerAction = {type: 'PLAY_NOTE'; pitch: StrictMusicalNote; octave: number}
| {type: 'CHANGE_INSTRUMENT'; instrument: string}
| {type: 'STOP'};