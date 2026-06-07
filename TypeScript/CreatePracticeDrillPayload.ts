import { IPracticeDrillDocument } from "./IPracticeDrillDocument";

export type CreatePracticeDrillPayload = Omit<PracticeDrillDocument, '_id'>;