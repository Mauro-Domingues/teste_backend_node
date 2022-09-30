const mysql = require("mysql2/promise")

const connectToMySql = async () => {
    if (global.connection && global.connection.state !== 'disconnected'){
        return global.connection
    }
    const config = {
        host: "db4free.net",
        user: "sota_admin",
        password: "861928493b3bdd5aa35f5e9b9ec3c6292ff42ee6e60ebc2c36c3a411d5d64cbd",
        database: "report_ticket_db"
    }
    const connection = await mysql.createConnection(config)
    global.connection = connection
}

connectToMySql()
module.exports = {connectToMySql}