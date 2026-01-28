const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    email: 'test@test.com',
    password: bcrypt.hashSync('123456', 10) // 加密後密碼
  }
];

exports.findByEmail = (email) => {
  return users.find(user => user.email === email);
};