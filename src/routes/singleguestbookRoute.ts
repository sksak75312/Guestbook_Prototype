import { Router } from "express";
import db from '../config/firebase';

const router = Router();

// 新增集合
router.post('/create', async (req, res) => {
  const { project } = req.body;

  const getSetCollection = db.collection(project);
  const snapshot = await getSetCollection.get();
  const isSetExist = !!snapshot.size;

  if (isSetExist) {
    res.status(404).json({
      status: 404,
      message: '專案名稱已存在，請重新確認名稱'
    });
  } else {
    db.collection(project).add({})
    res.status(200).json({
      status: 200,
      message: `資料庫創建成功`
    })
  }
})

export default router;