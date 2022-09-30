const db = require("../../dbConn.js")

class ticketDatabase {
    async get() {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM ticket"
        const [tickets] = await conn.query(query)
        return tickets
    }

    async getById(id) {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM ticket WHERE id = ?"
        const [ticket] = await conn.query(query, [id])
        return ticket
    }

    async create(ticketData) {
        const conn = await db.connectToMySql()
        const query = "INSERT INTO ticket (id, bar_code, qr_code, price) VALUES (?, ?, ?, ?)"
        const ticket = await conn.query(query, [
            ticketData.id,
            ticketData.bar_code,
            ticketData.qr_code,
            ticketData.price
        ])
        return ticket
    }

    async update(id, ticketData) {
        const conn = await db.connectToMySql()
        const query = "UPDATE event SET arg = ? WHERE id = ?"
        const ticket = await conn.query(query, [
            ticketData.arg,
            id
        ])
        return ticket
    }

    async delete(id) {
        const conn = await db.connectToMySql()
        const query = "DELETE FROM ticket WHERE id = ?"
        const ticket = await conn.query(query, [id])
    }
}

module.exports = ticketDatabase