import db from '../config/firebase';
import { Guestbook } from '../types/interface';

// 取得所有 Guestbook 資料
export async function getAllGuestbookEntries(): Promise<Guestbook[]> {
  const guestbookRef = db.collection('guestbook');

  // Firebase 有直接提供
  const snapshot = await guestbookRef.get();

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data as Guestbook[];
}

// firebase 提供 add 可以產生唯一識別碼，與 crypto.randomUUID() 相同
// await db.collection('guestbook').doc(crypto.randomUUID()).set(body);

export async function postGuestbookEntries(body: Guestbook): Promise<boolean> {
  await db.collection('guestbook').add(body);
  return true;
}

export async function deleteGuestbookEntries(id: string): Promise<boolean> {
  await db.collection('guestbook').doc(id).delete();
  return true;
}
