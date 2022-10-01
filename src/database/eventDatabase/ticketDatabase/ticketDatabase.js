const db = require("../../dbConn.js")

class ticketDatabase {
    async get(id) {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM ticket WHERE id = ?"
        const [tickets] = await conn.query(query, [id])
        return tickets
    }

    async getById(ticketData) {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM ticket WHERE ticket_id = ?"
        const [ticket] = await conn.query(query, [
            ticketData.ticket_id
        ])
        return ticket
    }

    async create(ticketData) {
        const conn = await db.connectToMySql()
        const query = "INSERT INTO ticket (id, bar_code, qr_code, price, type) VALUES (?, ?, ?, ?, ?)"
        let price = null
        switch(ticketData.type){
            case 'Camarote':
                price = 150.00
            break
            case 'Vip':
                price = 100.00
            break
            case 'Pista':
                price = 70.00
            break
            default: 
        } 
        const ticket = await conn.query(query, [
            ticketData.id,
            ticketData.code,
            ticketData.code,
            price,
            ticketData.type
        ])
        return ticket
    }

    async update(ticketData) {
        const conn = await db.connectToMySql()
        const query = "UPDATE event SET arg = ? WHERE ticket_id = ?"
        const ticket = await conn.query(query, [
            ticketData.arg,
            ticketData.ticket_id
        ])
        return ticket
    }

    async delete(ticketData) {
        const conn = await db.connectToMySql()
        const query = "DELETE FROM ticket WHERE ticket_id = ?"
        const ticket = await conn.query(query, [ticketData.ticket_id])
    }
}

module.exports = ticketDatabase