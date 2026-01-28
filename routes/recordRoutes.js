const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');


// router.get('/', (req, res) => {
//   console.log('✅ router 收到 GET /');
//   res.send('🎯 router OK');
// });

// 讀取全部資料
router.get('/', recordController.getAllRecords);
// 讀取單筆資料
router.get('/:id', recordController.getRecordById);

router.post('/', recordController.createRecord);
router.put('/:id', recordController.updateRecord);
router.delete('/:id', recordController.deleteRecord);


module.exports = router;