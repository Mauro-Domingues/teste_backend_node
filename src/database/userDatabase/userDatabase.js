const jwt = require('jsonwebtoken')
const db = require('../dbConn.js')
const bcrypt = require('bcrypt')
//require('dotenv').config()

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
        const query = "INSERT INTO user (email, password) VALUES (?, ?)"
        bcrypt.hash(userData.password, 10, async (err, res) => {
            const user = await conn.query(query, [userData.email, res])
            return user
        })

    }

    async update(id, userData) {
        const conn = await db.connectToMySql()
        const query = "UPDATE user SET password = ? WHERE id = ?"
        bcrypt.hash(userData.password, 10, async (err, res) => {
            const user = await conn.query(query, [res ,id])
            return user
        })
    }

    async delete(id) {
        const conn = await db.connectToMySql()
        const query = "DELETE FROM user WHERE id = ?"
        const user = await conn.query(query, [id])
    }

    async login(userData) {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM user"
        const [users] = await conn.query(query)
        let auth = [{"Token": "Falha na autenticação"}]
        for (let i = 0; i < users.length; i++) {
            if (userData.email === users[i].email) {
                let boolean = await bcrypt.compare(userData.password, users[i].password)
                if (boolean) {
                    auth = [{
                        "Token": jwt.sign({
                            user: users[i].email,
                            password: users[i].password
                        }, process.env.SECRET, {
                            expiresIn: "1h"
                        })
                    }]
                }
            }
        }
        return auth
    }

}

module.exports = userDatabase