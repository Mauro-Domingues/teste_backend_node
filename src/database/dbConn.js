const mysql = require('mysql2/promise')
require('dotenv').config() //Por algum motivo místico o heroku está brigando com esse import específico

const host = (process.env.DB_HOST || 'localhost')
const user = (process.env.DB_USER || 'root')
const password = (process.env.DB_PASSWORD || '')
const database = (process.env.DB_DATABASE || 'report_ticket_db')

const connectToMySql = async () => {
    if (global.connection && global.connection.state !== 'disconnected'){
        return global.connection
    }
    const config = {
        host: host,
        user: user,
        password: password,
        database: database
    }
    const connection = await mysql.createConnection(config)
    global.connection = connection
}

connectToMySql()
module.exports = {connectToMySql}