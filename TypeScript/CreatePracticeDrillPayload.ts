import { IPracticeDrillDocument } from "./IPracticeDrillDocument";

export type CreatePracticeDrillPayload = Omit<IPracticeDrillDocument, '_id'>;