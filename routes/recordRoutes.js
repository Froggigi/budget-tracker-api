const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');
const authenticate = require('../middleware/authMiddleware');

// router.get('/', (req, res) => {
//   console.log('✅ router 收到 GET /');
//   res.send('🎯 router OK');
// });

// 讀取全部資料
router.get('/', authenticate, recordController.getAllRecords);
// 讀取單筆資料
router.get('/:id', authenticate, recordController.getRecordById);

router.post('/', authenticate, recordController.createRecord);
router.put('/:id', authenticate, recordController.updateRecord);
router.delete('/:id', authenticate, recordController.deleteRecord);


module.exports = router;