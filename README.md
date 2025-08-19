# Guestbook API 專案

這是一個使用 Express 和 Firebase Cloud Firestore 建立的簡易留言板後端 API 服務。

## 專案描述

本專案旨在提供一個基礎的後端服務，用於留言板功能。目前已建立基本的 Express 伺服器、路由結構，並成功串接 Firebase 資料庫。

### 目前功能

- 提供一個根路徑 `/` 的歡迎頁面。
- 提供一個 `/guestbook` 路徑，每次請求時會向 Firestore 的 `guestbook` 集合中新增一筆測試資料，並將該筆資料回傳。

### 未來開發方向

- [ ] **`GET /guestbook`**: 調整為讀取並回傳所有留言列表。
- [ ] **`POST /guestbook`**: 建立一個新的端點，用於接收前端傳來的資料並新增一筆留言。
- [ ] **`DELETE /guestbook/:id`**: 建立一個新的端點，用於刪除特定 ID 的留言。
- [ ] **`PATCH /guestbook/:id`**: 建立一個新的端點，用於更新特定 ID 的留言內容。
- [ ] **資料驗證**: 針對傳入的請求內容進行驗證，確保資料的完整性與正確性。
- [ ] **錯誤處理**: 建立一個統一的錯誤處理中介軟體。

## 技術架構 (Tech Stack)

- **後端框架**: Express.js
- **資料庫**: Cloud Firestore (Firebase)
- **語言**: TypeScript
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
│   │   └── guestbookController.ts
│   ├── routes/             # 路由定義
│   │   ├── guestbookRoute.ts
│   │   └── index.ts
│   ├── services/           # 業務邏輯 (與資料庫互動)
│   │   └── guestbookService.ts
│   └── app.ts              # Express 應用程式進入點
├── .env                    # 環境變數 (需自行建立)
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── README.md               # 專案說明
└── tsconfig.json           # TypeScript 編譯器設定
```
