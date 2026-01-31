const express = require('express');
const cors = require('cors');
const recordRoutes = require('./routes/recordRoutes');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Budget Tracker API');
});


app.use('/api/records', recordRoutes);


app.use((req, res, next) => {
  console.log(`🔍 收到請求: ${req.method} ${req.url}`);
  next();
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//新增登入
const authRoutes = require('./routes/authRoutes');

app.use('/auth', authRoutes);