export enum SuccessMessage {
  POST_PROJECT_SUCCESS = '新專案創建成功',
  POST_COMMENT_SUCCESS = '新增留言成功',
  DELETE_COMMENT_SUCCESS = '成功刪除留言',
}

export enum ErrorMessage {
  SEARCH_NOT_PROJECT = '查無此專案，請重新確認專案名稱',
  POST_COMMENT_FAILURE = '留言失敗!，請確認專案相關資訊',
  GET_ALL_PROJECT_FAILURE = '取得所有專案失敗',
  POST_PROJECT_IS_EXIST = '專案名稱已存在，請重新確認名稱',
}
