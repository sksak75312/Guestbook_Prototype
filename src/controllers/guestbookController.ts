import { Request, Response } from 'express';

import getGuestbookDB from '../services/guestbookService';

export function get(_: Request, res: Response) {
  res.status(200).send(getGuestbookDB());
}
