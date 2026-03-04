const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config()
console.log('app.js 路徑', require.resolve('./app'))

const app = require('./app')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 3000

// 先連資料庫
connectDB()
console.log('app type:',typeof app)
// 再啟動 server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
