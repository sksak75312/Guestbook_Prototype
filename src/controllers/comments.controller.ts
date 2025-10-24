import { Request, Response } from 'express';
import * as commentsService from '../services/comments.service';

export async function getSingleProject(req: Request, res: Response) {
  try {
    const { projectId } = req.params;
    const data = await commentsService.getSingleProject(projectId);
    res.status(200).send({
      status: 200,
      data,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({
        status: 404,
        message: error.message,
      });
    }
  }
}

export async function postSingleProjectMessage(req: Request, res: Response) {
  try {
    const { projectId } = req.params;
    const { userId, message } = req.body;
    await commentsService.postSingleProjectMessage(projectId, userId, message);
    res.status(201).send({
      status: 201,
      message: '新增留言成功',
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({
        status: 404,
        message: error.message,
      });
    }
  }
}

export async function getAllProjects(_: Request, res: Response) {
  try {
    const data = await commentsService.getAllProjects();
    res.status(200).json({
      status: 200,
      data,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({
        status: 404,
        message: error.message,
      });
    }
  }
}

export async function postNewProject(req: Request, res: Response) {
  try {
    const { project } = req.body;
    await commentsService.postNewProject(project);
    res.status(201).send({
      status: 201,
      message: `資料庫創建成功`,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({
        status: 404,
        message: error.message,
      });
    }
  }
}

export async function deleteSingleProjectMessage(req: Request, res: Response) {
  try {
    const { projectId, messageId } = req.params;
    await commentsService.deleteSingleProjectMessage(projectId, messageId);
    res.status(200).send({
      status: 200,
      message: '成功刪除指定留言',
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).send({
        status: 404,
        message: '刪除留言失敗，請通知工程師',
      });
    }
  }
}
