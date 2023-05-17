const mysql = require('mysql2/promise')

exports.handler = async () => {
  const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
      rejectUnauthorized: true,
    }
  }

  const pooll = mysql.createPool(dbConfig)

  const conn = await pooll.getConnection()

  const [rows] = conn.query("SELECT * FROM pokemon")

  conn.release()

  return {
    statusCode: 200,
    body: JSON.stringify({ data: rows }),
    headers: {
      'Content-Type': 'application/json'
    },
  }
}