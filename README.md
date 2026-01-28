# 📒 Budget Tracker API

一個使用 **Node.js + Express + JWT** 建立的後端 RESTful API，  
提供使用者登入驗證與記帳資料的完整 **CRUD** 功能。

---

## 🔧 技術架構

- Node.js  
- Express  
- JWT（jsonwebtoken）  
- bcryptjs  
- RESTful API 設計  
- Middleware 驗證機制  
- MVC 架構（Routes / Controllers / Models）

---

## 📂 專案架構

budget-tracker
├─ controllers
│ ├─ authController.js
│ └─ recordController.js
├─ routes
│ ├─ authRoutes.js
│ └─ recordRoutes.js
├─ middleware
│ └─ authMiddleware.js
├─ models
│ ├─ userModel.js
│ └─ recordModel.js
├─ app.js
└─ package.json


---

## 🔐 身分驗證流程（JWT）

### 登入流程
Client → POST /auth/login
→ 驗證帳號密碼
→ 產生 JWT Token
→ 回傳 Token


### 受保護 API 流程
Client → Request + Authorization: Bearer <token>
→ authMiddleware 驗證 JWT
→ 驗證成功才進入 Controller


---

## 🧩 API 功能一覽

### Auth（身分驗證）

| Method | Path        | 說明                |
|--------|-------------|---------------------|
| POST   | /auth/login | 使用者登入（回傳 JWT） |

### Records（需登入）

| Method | Path                  | 說明              |
|--------|-----------------------|-------------------|
| GET    | /api/records          | 取得所有記帳資料   |
| GET    | /api/records/:id      | 取得單筆資料       |
| POST   | /api/records          | 新增記帳           |
| PUT    | /api/records/:id      | 更新記帳           |
| DELETE | /api/records/:id      | 刪除記帳           |

> 📌 所有 Records API 都需要 JWT 驗證

---

## 🧠 設計重點

- 使用 **Middleware** 將驗證邏輯與業務邏輯分離  
- **Routes** 僅負責路由分派，不直接操作資料  
- **Controller** 負責商業邏輯  
- **Model** 負責資料存取，避免重複程式碼  
- 使用 **JWT** 確保 API 存取安全性  

---

## 🧪 測試方式

1. 使用 Postman 測試 API  
2. 登入成功後取得 JWT  
3. 在 Header 加入：
Authorization: Bearer <token>

4. 測試所有 CRUD API

---

## 🚀 未來可擴充功能

- 使用者註冊（Register）  
- 使用者角色權限（Admin / User）  
- 部署至雲端（Docker + Nginx）  
- 前端串接（React / Vue）

---

## 👤 作者

**CHI CHANG**  
後端工程師轉職學習專案
