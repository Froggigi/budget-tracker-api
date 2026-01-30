const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    email: 'test@test.com',
    // password: bcrypt.hashSync('123456', 10) // 加密後密碼
    password: '$2b$10$azU.d4nhVEcBF0LT6dRN5eJS24eV34wVkYFi2XV7glvxSxqhVIlsu'
  }
];

exports.findByEmail = (email) => {
  return users.find(user => user.email === email);
};