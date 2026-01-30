const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
//建立JWT驗證
const authenticate = require('../middleware/authMiddleware')

// 要建立JWT驗證，新增 middleware。 所以新增修改下面的
router.post('/login', authController.login);





module.exports = router;