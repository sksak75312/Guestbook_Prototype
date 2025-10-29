import { Request, Response, NextFunction } from 'express';

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { message } = err;
  res.json({
    status: 404,
    message,
  });
}
