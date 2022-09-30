const db = require("../dbConn.js")

class userDatabase {
    
    async get() {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM user"
        const [users] = await conn.query(query)
        return users
    }

    async getById(id) {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM user WHERE id = ?"
        const [user] = await conn.query(query, [id])
        return user
    }

    async create(userData) {
        const conn = await db.connectToMySql()
        const query = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)"
        const user = await conn.query(query, [
            userData.name,
            userData.email,
            userData.password
        ])
        return user
    }

    async update(id, userData) {
        const conn = await db.connectToMySql()
        const query = "UPDATE user SET arg = ? WHERE id = ?"
        const user = await conn.query(query, [
            userData.arg,
            id
        ])
        return user
    }

    async delete(id) {
        const conn = await db.connectToMySql()
        const query = "DELETE FROM user WHERE id = ?"
        const user = await conn.query(query, [id])
    }
}

module.exports = userDatabase