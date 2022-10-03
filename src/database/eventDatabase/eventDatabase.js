const db = require('../dbConn.js')

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
            eventData.image,
            eventData.data,
            eventData.place,
            eventData.coordinates,
            eventData.important_info,
            eventData.map
        ])
        return event
    }

    async update(id, eventData) {
        const conn = await db.connectToMySql()
        const query = "UPDATE event SET name = ?, description = ?, image = ?, data = ?, place = ?, coordinates = ?, important_info = ?, map = ? WHERE id = ?"
        const event = await conn.query(query, [
            eventData.name,
            eventData.description,
            eventData.image,
            eventData.data,
            eventData.place,
            eventData.coordinates,
            eventData.important_info,
            eventData.map,
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