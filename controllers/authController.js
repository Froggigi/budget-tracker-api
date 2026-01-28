const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

// 加入註冊功能
exports.register = (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ 檢查輸入
  if (!email || !password) {
    return res.status(400).json({ message: '請提供 email 與 password' });
  }

  // 2️⃣ 檢查使用者是否已存在
  if (userModel.findByEmail(email)) {
    return res.status(400).json({ message: 'Email 已被註冊' });
  }

  // 3️⃣ 新增使用者
  const newUser = userModel.add({ email, password });

  // 4️⃣ 回傳結果
  res.status(201).json({
    message: 'User registered',
    userId: newUser.id
  });
};


// 登入功能
exports.login = (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ 檢查使用者是否存在
  const user = userModel.findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: '帳號或密碼錯誤' });
  }

  // 2️⃣ 比對密碼
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: '帳號或密碼錯誤' });
  }

  // 3️⃣ 產生 JWT
  const token = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({
    message: 'Login success',
    token
  });
};