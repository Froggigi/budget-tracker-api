// 原本的固定使用者資料
// const bcrypt = require('bcryptjs');

// const users = [
//   {
//     id: 1,
//     email: 'test@test.com',
//     // password: bcrypt.hashSync('123456', 10) // 加密後密碼
//     password: '$2b$10$azU.d4nhVEcBF0LT6dRN5eJS24eV34wVkYFi2XV7glvxSxqhVIlsu'
//   }
// ];

// exports.findByEmail = (email) => {
//   return users.find(user => user.email === email);
// };


// 改為連接資料庫
const User = require('./user');

exports.findByEmail = async (email) => {
  return await User.findOne({ email });
};