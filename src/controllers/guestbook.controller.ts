import { Request, Response } from 'express';
import * as guestbookService from '../services/guestbook.service';
import z from 'zod';
import { guestbookPostSchema } from '../schemas/guestbook.schema';

export async function getAll(_: Request, res: Response) {
  try {
    const allData = await guestbookService.getAllGuestbookEntries();

    // 即使沒有資料，回傳 200 OK 和一個空陣列是 RESTful API 的常見做法
    // 代表「成功找到 guestbook 這個資源，但裡面目前沒有內容」
    res.status(200).json(allData);
  } catch {
    // 回傳 500 Internal Server Error，表示伺服器端發生了非預期的錯誤
    res.status(500).json({
      message: '讀取留言時發生錯誤',
    });
  }
}

// 新增留言
export async function postGuestbook(req: Request, res: Response) {
  try {
    await guestbookPostSchema.parse(req.body);
    await guestbookService.postGuestbookEntries(req.body);
    res.status(201).json({ message: '新增留言成功' });
  } catch (error) {
    console.log(error);

    if (error instanceof z.ZodError) {
      console.log(error.issues);
    }

    res.status(500).json({
      message: '新增留言時發生錯誤',
    });
  }
}

// 刪除指定留言
export async function deleteGuestbook(req: Request, res: Response) {
  try {
    await guestbookService.deleteGuestbookEntries(req.params.id);
    res.status(200).json({ message: '刪除留言成功' });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: '刪除留言時發生錯誤',
    });
  }
}
