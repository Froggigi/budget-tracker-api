const recordModel = require('../models/recordModel');
const Record = require('../models/Record')

// 取所有資料 'R'
exports.getAllRecords = async (req, res) => {
  // console.log('✅ getAllRecords 被呼叫');  // ← 測試 加這行！  
  try {
    const records = await Record.find()
    res.json(records)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
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
exports.createRecord = async (req, res) => {
  console.log("req.body =", req.body)
  try {
    const record = new Record(req.body)

    const savedRecord = await record.save()
    
    res.status(201).json(savedRecord)
  } catch{
    res.status(400).json({ message: err.message })
  }
};

// 'U'
exports.updateRecord = async (req, res) => {
  try {

    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after' }
    )

    if (!record) {
      return res.status(404).json({ message: "Record not found" })
    }

    res.json(record)

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}


// 'D'
exports.deleteRecord = async (req, res) => {
  try {

    const record = await Record.findByIdAndDelete(req.params.id)

    if (!record) {
      return res.status(404).json({ message: "Record not found" })
    }

    res.json({ message: "Record deleted" })

  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
