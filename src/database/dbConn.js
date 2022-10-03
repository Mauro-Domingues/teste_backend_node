const mysql = require('mysql2/promise')
const dotenv = require('dotenv').config()

const connectToMySql = async () => {
    if (global.connection && global.connection.state !== 'disconnected'){
        return global.connection
    }
    const config = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    }
    const connection = await mysql.createConnection(config)
    global.connection = connection
}

connectToMySql()
module.exports = {connectToMySql}