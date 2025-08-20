import { Router } from 'express';
import * as guestbookController from '../controllers/guestbookController';

const router = Router();

router.get('/', guestbookController.getAll);
router.post('/', guestbookController.postGuestbook);
router.delete('/:id', guestbookController.deleteGuestbook);

export default router;
