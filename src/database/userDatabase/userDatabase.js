const db = require("../dbConn.js")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
        //bcrypt.hash(userData.password, 10, async (err, res) => {
        const user = await conn.query(query, [
            userData.name,
            userData.email,
            userData.password
        ])
        return user
        //}) bcrypt funcionando perfeitamente ao criar
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

    async login(userData) {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM user"
        const [users] = await conn.query(query)
        let auth = [{'Token': 'Falha na autenticação'}]
        users.map(() => {
            for (let i = 0; i < users.length; i++) {
                if (userData.email === users[i].email) {
                    /*bcrypt.compare(userData.password, users[i].password, (err, res) => {
                        if (res) {
                            auth = [{
                                "Token": jwt.sign({
                                    user: users[i].email,
                                    password: users[i].password
                                }, 'Segredo', {
                                    expiresIn: "1h"
                                })
                            }]
                        }
                    }) Tentei usar o bcrypt para validar a senha mas não retorna para fora do escopo*/
                    if (userData.password === users[i].password) {
                        auth = [{
                            "Token": jwt.sign({
                                user: users[i].email,
                                password: users[i].password
                            }, 'Segredo', {
                                expiresIn: "1h"
                            })
                        }]
                    }
                }
            }
        })
        return auth
    }

}

module.exports = userDatabase