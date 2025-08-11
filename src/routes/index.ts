import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.send(
    '<h1 style="width: 100%; margin: 0; text-align: center;">Guestbook</h1>',
  );
});

export default router;
