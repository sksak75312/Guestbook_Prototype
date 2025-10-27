import { Router } from 'express';
import * as commentsController from '../controllers/comments.controller';

const router = Router();

router.get('/project/:projectId', commentsController.getSingleProject);

router.post('/project/:projectId', commentsController.postSingleProjectMessage);

router.get('/all', commentsController.getAllProjects);

router.post('/create', commentsController.postNewProject);

router.delete(
  '/project/:projectId/:messageId',
  commentsController.deleteSingleProjectMessage,
);

export default router;
