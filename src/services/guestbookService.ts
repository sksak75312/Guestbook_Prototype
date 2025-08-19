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
