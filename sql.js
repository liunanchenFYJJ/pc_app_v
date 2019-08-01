const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Cln314214@',
  database: 'mysql',
})

db.query('SELECT * FROM `db`', (err, data) => {
  console.log('成功') // 这里可以打出'成功'
  if (err) {
    console.log(err) // 这里报错
  } else {
    console.log(data)
  }
})