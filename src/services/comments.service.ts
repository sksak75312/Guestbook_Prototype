import * as commentsRepositories from '../repositories/comments.repository';

import { ErrorMessage } from '../types/message.enum';

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
    throw new Error(ErrorMessage.SEARCH_NOT_PROJECT);
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
    throw new Error(ErrorMessage.POST_COMMENT_FAILURE);
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
    throw new Error(ErrorMessage.GET_ALL_PROJECT_FAILURE);
  }
}

export async function postNewProject(project: string) {
  const isSetExist = await commentsRepositories.postNewProject(project);

  if (isSetExist) {
    throw new Error(ErrorMessage.POST_PROJECT_IS_EXIST);
  }
}

export async function deleteSingleProjectMessage(
  projectId: string,
  messageId: string,
) {
  await commentsRepositories.deleteSingleProjectMessage(projectId, messageId);
}
