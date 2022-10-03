const mysql = require('mysql2/promise')
const config = require('./dbConfig.js')

const connectToMySql = async () => {
    if (global.connection && global.connection.state !== 'disconnected'){
        return global.connection
    }
    const connection = await mysql.createConnection(config)
    global.connection = connection
}

connectToMySql()

module.exports = {connectToMySql}