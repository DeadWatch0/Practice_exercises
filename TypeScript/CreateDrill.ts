import { ApiResponse } from './ApiResponse';
import { Request, Response } from 'express'
import { CreatePracticeDrillPayload } from './CreatePracticeDrillPayload';
import  { IPracticeDrillDocument, PracticeDrillDTO } from './IPracticeDrillDocument'

export const createDrill = (req: Request<{}, any, CreatePracticeDrillPayload>, res: Response<ApiResponse<PracticeDrillDTO>>) => {...};