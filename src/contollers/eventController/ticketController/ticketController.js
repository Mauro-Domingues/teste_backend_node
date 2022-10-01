const TicketService = require("../../../services/eventService/ticketService/ticketService.js")

exports.getAll = async (req, res, next) => {
    try {
        const payload = await new TicketService().getEveryTicket()
        res.status(200).send(payload)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

exports.get = async (req, res, next) => {
    try {
        const payload = await new TicketService().getAllTickets(req.params.id)
        res.status(200).send(payload)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

exports.getById = async (req, res, next) => {
    try {
        const payload = await new TicketService().getTicketById(req.params.ticket_id)
        res.status(200).send(payload)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

exports.post = async (req, res, next) => {
    try {
        const payload = await new TicketService().createTicket(req.body)
        res.status(201).send(payload)
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}

exports.put = async (req, res, next) => {
    try {
        const ticket_id = req.params.ticket_id
        const body = req.body
        const oldTicket = await new TicketService().getTicketById(req.body)
        if (!oldTicket || oldTicket.length === 0) {
            throw new Error(`Ingresso número ${ticket_id} não foi encontrado`)
        }
        const payload = await new TicketService().updateTicket(req.body)
        res.status(200).send(payload)
    } catch (error) {
        res.status(404).send({
            message: error.message
        })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const ticket_id = req.params.ticket_id
        const oldTicket = await new TicketService().getTicketById(req.body)
        if (!oldTicket || oldTicket.length === 0) {
            throw new Error(`O Ingresso número ${ticket_id} não existe`)
        }
        const payload = await new TicketService().deleteTicket(req.body)
        res.status(204).send(payload)
    } catch (error) {
        res.status(404).send({
            message: error.message
        })
    }
}