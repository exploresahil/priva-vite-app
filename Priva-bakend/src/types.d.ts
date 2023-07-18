import { Request, Response } from "express";
export interface contx {
  req: Request;
  res: Response;
}
