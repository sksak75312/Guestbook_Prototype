import db from '../config/firebase';

export async function getSingleProject(projectId: string) {
  const getFirebaseStore = db.collection(projectId);
  const snapshot = await getFirebaseStore.get();

  return snapshot;
}

export async function postSingleProjectMessage(
  projectId: string,
  userId: string,
  message: string,
) {
  const docRef = await db.collection(projectId).add({
    date: new Date(),
    userId,
    message,
  });

  return docRef;
}

export async function getAllProjects() {
  const collections = await db.listCollections();

  return collections;
}

export async function postNewProject(project: string) {
  const getSetCollection = db.collection(project);
  const snapshot = await getSetCollection.get();
  const isSetExist = !!snapshot.size;

  if (isSetExist) {
    return isSetExist;
  } else {
    db.collection(project).add({});
  }
}

export async function deleteSingleProjectMessage(
  projectId: string,
  messageId: string,
) {
  await db.collection(projectId).doc(messageId).delete();
}
