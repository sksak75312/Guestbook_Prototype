import { Request, Response, NextFunction } from 'express';
import * as commentsService from '../services/comments.service';

import { SuccessMessage } from '../types/message.enum';

export async function getSingleProject(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { projectId } = req.params;
    const data = await commentsService.getSingleProject(projectId);
    res.status(200).json({
      status: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
}

export async function postSingleProjectMessage(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { projectId } = req.params;
    const { userId, message } = req.body;
    await commentsService.postSingleProjectMessage(projectId, userId, message);
    res.status(201).json({
      status: 201,
      message: SuccessMessage.POST_COMMENT_SUCCESS,
    });
  } catch (error) {
    next(error);
  }
}

export async function getAllProjects(
  _: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const data = await commentsService.getAllProjects();
    res.status(200).json({
      status: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
}

export async function postNewProject(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { project } = req.body;
    await commentsService.postNewProject(project);
    res.status(201).json({
      status: 201,
      message: SuccessMessage.POST_PROJECT_SUCCESS,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteSingleProjectMessage(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { projectId, messageId } = req.params;
    await commentsService.deleteSingleProjectMessage(projectId, messageId);
    res.status(200).json({
      status: 200,
      message: SuccessMessage.DELETE_COMMENT_SUCCESS,
    });
  } catch (error) {
    next(error);
  }
}
