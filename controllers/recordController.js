const recordModel = require('../models/recordModel');

// 取所有資料 'R'
exports.getAllRecords = (req, res) => {
  // console.log('✅ getAllRecords 被呼叫');  // ← 測試 加這行！  
  res.json(recordModel.getAll());
};

// 新增 取單筆資料 
exports.getRecordById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const record = recordModel.getById(id);
  if (!record){
    return res.status(404).json({ message: 'record not found'});
  }
  res.json(record);
}

// 'C'
exports.createRecord = (req, res) => {
  const newRecord = req.body;
  //增加驗證
  if ( !newRecord.name || typeof newRecord.amount !== 'number'){
    return res.status(400).json({ message: '請提供正確的name 與 amount'});
  }

  recordModel.add(newRecord);
  res.status(201).json({ 
    message: 'Record created', 
    data: newRecord 
  });
};

// 'U'
exports.updateRecord = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  const updated = recordModel.update(id, updatedData);
  if (updated) {
    res.json({ message: 'Record updated', data: updated });
  } else {
    res.status(404).json({ message: 'Record not found' });
  }
};

// 'D'
exports.deleteRecord = (req, res) => {
  const id = parseInt(req.params.id);
  console.log('🗑 deleteRecord 被呼叫，id:', id);
  const deleted = recordModel.remove(id);
  if (deleted) {
    res.json({ message: 'Record deleted' });
  } else {
    res.status(404).json({ message: 'Record not found' });
  }
};
