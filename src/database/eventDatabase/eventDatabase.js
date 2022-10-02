const db = require("../dbConn.js")

class eventDatabase {
    async get() {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM event"
        const [events] = await conn.query(query)
        return events
    }

    async getById(id) {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM event WHERE id = ?"
        const [event] = await conn.query(query, [id])
        return event
    }

    async create(eventData) {
        const conn = await db.connectToMySql()
        const query = "INSERT INTO event (name, description, image, data, place, coordinates, important_info, map) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        const event = await conn.query(query, [
            eventData.name,
            eventData.description,
            eventData.image, // Inserir imagem -> "Prioridade baixa"
            eventData.data,
            eventData.place,
            eventData.coordinates,
            eventData.important_info,
            eventData.map  // Inserir imagem -> "Prioridade baixa"
        ])
        return event
    }

    async update(id, eventData) {
        const conn = await db.connectToMySql()
        const query = "UPDATE event SET arg = ? WHERE id = ?"
        const event = await conn.query(query, [
            eventData.arg,
            id
        ])
        return event
    }

    async delete(id) {
        const conn = await db.connectToMySql()
        const query = "DELETE FROM event WHERE id = ?"
        const event = await conn.query(query, [id])
    }
}

module.exports = eventDatabase