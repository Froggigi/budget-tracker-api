const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization']; // 從 Header 拿 token
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1]; // Bearer <token>
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // 驗證 token
    req.user = decoded; // 把 userId 放進 req.user
    next(); // 驗證成功 → 繼續執行 route
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
// console.log('Authorization header:', req.headers.authorization);
module.exports = authenticate;