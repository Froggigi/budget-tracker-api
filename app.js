const express = require('express');
const cors = require('cors');
const recordRoutes = require('./routes/recordRoutes');

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Budget Tracker API');
});




app.use((req, res, next) => {
  console.log(`🔍 收到請求: ${req.method} ${req.url}`);
  next();
});

app.use('/api/records', recordRoutes);

//新增登入
app.use('/auth', authRoutes);



module.exports = app;