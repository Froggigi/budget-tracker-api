const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
//建立JWT驗證
const authenticate = require('../middleware/authMiddleware')

// 要建立JWT驗證，新增 middleware。 所以新增修改下面的
router.post('/login', authController.login);




// 這裡 GET /api/records 就需要登入
router.get('/', authenticate, recordController.getAllRecords);

// POST /api/records 也需要登入
router.post('/', authenticate, recordController.createRecord);

module.exports = router;