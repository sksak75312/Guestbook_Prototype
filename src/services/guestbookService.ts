import db from '../config/firebase';

// 取得所有 Guestbook 資料
export async function getAllGuestbookEntries() {
  const guestbookRef = db.collection('guestbook');
  const snapshot = await guestbookRef.get();

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

// firebase 提供 add 可以產生唯一識別碼，與 crypto.randomUUID() 相同
export async function postGuestbookEntries(body: {
  user: string;
  message: string;
}) {
  await db.collection('guestbook').add(body);
  return true;
}
