const EventService = require("../../services/eventService/eventService.js")

exports.get = async (req, res, next) => {
    try {
        const payload = await new EventService().getAllEvents()
        res.status(200).send(payload)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

exports.getById = async (req, res, next) => {
    try {
        const payload = await new EventService().getEventById(req.params.id)
        res.status(200).send(payload)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

exports.post = async (req, res, next) => {
    try {
        const payload = await new EventService().createEvent(req.body)
        res.status(201).send(payload)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

exports.put = async (req, res, next) => {
    try {
        const id = req.params.id
        const body = req.body
        const oldEvent = await new EventService().getEventById(id)
        if (!oldEvent || oldEvent.length === 0) {
            throw new Error(`Evento número ${id} não foi encontrado`)
        }
        const payload = await new EventService().updateEvent(id, body)
        res.status(200).send(payload)
    } catch (error) {
        res.status(404).send({
            message: error.message
        })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id
        const oldEvent = await new EventService().getEventById(id)
        if (!oldEvent || oldEvent.length === 0) {
            throw new Error(`O evento número ${id} não existe`)
        }
        const payload = await new EventService().deleteEvent(id)
        res.status(204).send(payload)
    } catch (error) {
        res.status(404).send({
            message: error.message
        })
    }
}