import { Router } from 'express';
import * as guestbookController from '../controllers/guestbookController';

const router = Router();

router.get('/', guestbookController.getAll);

export default router;
