import { Router } from 'express';
import * as singleGuestBook from '../controllers/comments.controller';

const router = Router();

router.get('/project/:projectId', singleGuestBook.getSingleProject);

router.post('/project/:projectId', singleGuestBook.postSingleProjectMessage);

router.get('/all', singleGuestBook.getAllProjects);

router.post('/create', singleGuestBook.postNewProject);

router.delete(
  '/project/:projectId/:messageId',
  singleGuestBook.deleteSingleProjectMessage,
);

export default router;
