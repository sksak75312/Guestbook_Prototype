import { Request, Response } from 'express';
import db from '../config/firebase';

export async function getSingleProject(req: Request, res: Response) {
  const { projectId } = req.params;
  const getFirebaseStore = db.collection(projectId);
  const snapshot = await getFirebaseStore.get();

  const data = snapshot.docs.reduce(
    (acc, doc) => {
      const data = doc.data();
      if (Object.hasOwn(data, 'message')) {
        acc.push({ id: doc.id, ...data });
      }
      return acc;
    },
    [] as { id: string }[],
  );

  res.status(200).send({
    status: 200,
    data,
  });
}

export async function postSingleProjectMessage(req: Request, res: Response) {
  const { projectId } = req.params;
  const { userId, message } = req.body;

  await db.collection(projectId).add({
    date: new Date(),
    userId,
    message,
  });

  res.status(201).send({
    status: 201,
    message: '新增留言成功',
  });
}

export async function getAllProjects(_: Request, res: Response) {
  const collections = await db.listCollections();
  const data = collections.map((collection) => ({
    id: collection.id,
    name: collection.id,
  }));

  res.status(200).send({
    status: 200,
    data,
  });
}

export async function postNewProject(req: Request, res: Response) {
  const { project } = req.body;

  const getSetCollection = db.collection(project);
  const snapshot = await getSetCollection.get();
  const isSetExist = !!snapshot.size;

  if (isSetExist) {
    res.status(404).json({
      status: 404,
      message: '專案名稱已存在，請重新確認名稱',
    });
  } else {
    db.collection(project).add({});
    res.status(200).json({
      status: 200,
      message: `資料庫創建成功`,
    });
  }
}

export async function deleteSingleProjectMessage(req: Request, res: Response) {
  const { projectId, messageId } = req.params;
  await db.collection(projectId).doc(messageId).delete();
  console.log(projectId, messageId);

  res.status(200).send({
    status: 200,
    message: '成功刪除指定留言',
  });
}
