import db from '../config/firebase';

export default function getGuestbookDB() {
  const message = {
    message: 'TEST MESSAGE',
    id: new Date(),
  };

  const docRef = db.collection('guestbook').doc(`${new Date()}`);
  docRef.set(message);
  return message;
}
