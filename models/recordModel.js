let records = [
  { id: 1, name: '午餐', amount: 120 },
  { id: 2, name: '捷運', amount: 30 },
];

exports.getAll = () => records;

//新增取某資料
exports.getById = (id) => { 
  return records.find(r => r.id === id)
}

exports.add = (record) => {
  record.id = records.length ? records[records.length - 1].id + 1 : 1;  //三元運算
  records.push(record);
};

exports.update = (id, newData) => {
  const index = records.findIndex(r => r.id === id);
  if (index !== -1) {
    records[index] = { ...records[index], ...newData };
    return records[index];
  }
  return null;
};

exports.remove = (id) => {
  const index = records.findIndex(r => r.id === id);
  if (index !== -1) {
    records.splice(index, 1);
    return true;
  }
  return false;
};
