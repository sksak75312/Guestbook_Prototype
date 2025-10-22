import { Router } from 'express';
import db from '../config/firebase';

const router = Router();

/**
 * * 取得指定 Project ID 的資料
 */
router.get('/project/:projectId', async (req, res) => {
  const { projectId } = req.params;
  const getFirebaseStore = db.collection(projectId);
  const snapshot = await getFirebaseStore.get();

  const data = snapshot.docs.reduce(
    (acc, doc) => {
      const data = doc.data();

      /**
       * * 判斷是否存在某個參數，存在該參數就回傳
       */
      if (Object.hasOwn(data, 'name')) {
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
});

router.get('/all', async (_, res) => {
  /**
   * * collections 取得所有集合列表
   */
  const collections = await db.listCollections();

  /**
   * * 組合所有集合列表
   */
  const data = collections.map((collection) => ({
    id: collection.id,
    name: collection.id,
  }));

  res.status(200).send({
    status: 200,
    data,
  });
});

// 新增集合
router.post('/create', async (req, res) => {
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
});

export default router;
