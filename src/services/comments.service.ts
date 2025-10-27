import * as commentsRepositories from '../repositories/comments.repository';

export async function getSingleProject(projectId: string) {
  const snapshot = await commentsRepositories.getSingleProject(projectId);

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
  if (data.length) {
    return data;
  } else {
    throw new Error('查無此專案，請重新確認專案名稱');
  }
}

export async function postSingleProjectMessage(
  projectId: string,
  userId: string,
  message: string,
) {
  const docRef = await commentsRepositories.postSingleProjectMessage(
    projectId,
    userId,
    message,
  );

  if (docRef.id) {
    return;
  } else {
    throw new Error('留言失敗!，請確認 FireStore');
  }
}

export async function getAllProjects() {
  const collections = await commentsRepositories.getAllProjects();

  const data = collections.map((collection) => ({
    id: collection.id,
    name: collection.id,
  }));

  if (data.length) {
    return data;
  } else {
    throw new Error('取得專案失敗');
  }
}

export async function postNewProject(project: string) {
  const isSetExist = await commentsRepositories.postNewProject(project);

  if (isSetExist) {
    throw new Error('專案名稱已存在，請重新確認名稱');
  }
}

export async function deleteSingleProjectMessage(
  projectId: string,
  messageId: string,
) {
  await commentsRepositories.deleteSingleProjectMessage(projectId, messageId);
}
