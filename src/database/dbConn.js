const mysql = require('mysql2/promise')
require('dotenv').config()

const connectToMySql = async () => {
    if (global.connection && global.connection.state !== 'disconnected'){
        return global.connection
    }
    const connData = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
    const connection = await mysql.createConnection(connData)
    global.connection = connection
}

connectToMySql()
module.exports = {connectToMySql}