import mysql from 'mysql2'

import env from '../app/config'

const connection = mysql.createPool({
  host: env.MYSQL_HOST,
  database: env.MYSQL_DATABASE,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD
})

connection.getConnection((err, connect) => {
  if (err) {
    console.log('数据库连接失败~', err)
    return
  }
  console.log('数据库连接成功~')
})

export default connection.promise()
