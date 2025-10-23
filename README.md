# 公司系統留言板 Prototype

簡單的 Express + Firebase Cloud Firestore 後端範例，用來快速建立留言板 API 並驗證設計與流程。

- [**功能 DEMO 頁面**](https://sksak75312.github.io/Guestbook_Prototype/project.html)
- [**BASE API URL**](https://guestbook-p2iu.onrender.com/)

## 專案描述

本專案旨在提供一個基礎的後端服務，用於留言板功能。目前已建立基本的 Express 伺服器、路由結構，並成功串接 Firebase 資料庫。

### 目前功能

> 撰寫測試功能

- **`GET /`**: 根路徑的歡迎訊息。
- **`GET /guestbook`**: 取得所有留言列表。
- **`POST /guestbook`**: 新增一筆留言。
- **`DELETE /guestbook/:id`**: 刪除指定 ID 的留言。

---

> 符合專案需求 API

- **`GET/single-guestbook/project/:projectId`**: 取得單一專案所有留言
- **`POST/single-guestbook/project/:projectId`**: 新增指定專案留言
- **`GET/single-guestbook/all`**: 取得所以專案
- **`POST/single-guestbook/create`**: 新增一筆專案
- **`DELETE/single-guestbook/:projectId/:messageId`**: 刪除指定專案的指定留言

## 技術架構 (Tech Stack)

- **後端框架**: Express.js
- **資料庫**: Cloud Firestore (Firebase)
- **語言**: TypeScript
- **資料驗證**: zod
- **執行環境**: Node.js
- **套件管理器**: pnpm
- **程式碼品質**:
  - ESLint: 程式碼風格檢查
  - Prettier: 程式碼格式化
  - Husky: Git hooks 管理

## 安裝與執行方式 (Installation and Usage)

### 1. 前置準備

- 確認已安裝 Node.js (建議版本 >= 18)
- 確認已安裝 pnpm
- 擁有一個 Firebase 專案 並啟用 Firestore。

### 2. 取得 Firebase 憑證

1.  在 Firebase Console 中，前往「專案設定」 > 「服務帳戶」。
2.  點擊「產生新的私密金鑰」，下載一個 JSON 檔案。
3.  **請勿將此金鑰檔案提交到版本控制中！**

### 3. 安裝專案

```bash
# Clone 專案
git clone https://github.com/sksak75312/Guestbook.git
cd Guestbook

# 安裝依賴
pnpm install
```

### 4. 設定環境變數

1.  在專案根目錄建立一個 `.env` 檔案。
2.  根據步驟 2 下載的 JSON 金鑰檔案內容，將對應的值填入 `.env` 檔案中：

    ```env
    FIREBASE_PROJECT_ID="<your-project-id>"
    FIREBASE_PROJECT_KEY_ID="<your-private-key-id>"
    FIREBASE_PRIVATE_KEY="<your-private-key>"
    FIREBASE_CLIENT_EMAIL="<your-client-email>"
    FIREBASE_CLIENT_ID="<your-client-id>"
    FIREBASE_AUTH_URI="<your-auth-uri>"
    FIREBASE_TOKEN_URI="<your-token-uri>"
    FIREBASE_AUTH_PROVIDER_CERT_URL="<your-auth-provider-x509-cert-url>"
    FIREBASE_CLIENT_CERT_URL="<your-client-x509-cert-url>"
    ```

### 5. 執行專案

- **開發模式 (Development)**:

  ```bash
  pnpm dev
  ```

- **生產模式 (Production)**:
  ```bash
  pnpm build
  pnpm start
  ```

## 專案結構 (Project Structure)

```
.
├── dist/                   # 編譯後的 JavaScript 檔案
├── src/                    # 原始碼
│   ├── config/             # 設定檔 (Firebase 初始化)
│   │   └── firebase.ts
│   ├── controllers/        # 控制器 (處理請求與回應)
│   │   └── xxxxxController.ts
│   ├── routes/             # 路由定義
│   │   ├── xxxxxRoute.ts
│   │   └── index.ts
│   ├── services/           # 業務邏輯 (與資料庫互動)
│   │   └── xxxxxService.ts
│   └── app.ts              # Express 應用程式進入點
├── .env                    # 環境變數 (需自行建立)
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── README.md               # 專案說明
└── tsconfig.json           # TypeScript 編譯器設定
```
