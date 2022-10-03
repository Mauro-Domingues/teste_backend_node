const TicketService = require("../../../services/eventService/ticketService/ticketService.js")

exports.getAll = async (req, res, next) => {
    try {
        const payload = await new TicketService().getEveryTicket()
        res.status(200).send(payload)
    } catch {
        res.status(400).send({
            message: "falha ao buscar os ingressos"
        })
    }
}

exports.get = async (req, res, next) => {
    try {
        const payload = await new TicketService().getAllTickets(req.params.id)
        res.status(200).send(payload)
    } catch {
        res.status(400).send({
            message: `falha ao buscar os ingressos do evento ${req.params.id}`
        })
    }
}

exports.getById = async (req, res, next) => {
    try {
        const payload = await new TicketService().getTicketById(req.params.ticket_id)
        res.status(200).send(payload)
    } catch {
        res.status(400).send({
            message: `falha ao buscar o ingresso com id ${req.params.ticket_id}`
        })
    }
}

exports.post = async (req, res, next) => {
    try {
        const payload = await new TicketService().createTicket(req.body)
        res.status(201).send(payload)
    } catch {
        res.status(400).send({
            message: "falha ao gerar o ingresso"
        })
    }
}

exports.put = async (req, res, next) => {
    try {
        const ticket_id = req.params.ticket_id
        const oldTicket = await new TicketService().getTicketById(ticket_id)
        if (!oldTicket || oldTicket.length === 0) {
            throw new Error(`Ingresso número ${ticket_id} não foi encontrado`)
        }
        const payload = await new TicketService().updateTicket(ticket_id, req.body)
        res.status(200).send(payload)
    } catch {
        res.status(404).send({
            message: `falha ao atualizar o ingresso com id ${req.params.ticket_id}`
        })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const ticket_id = req.params.ticket_id
        const oldTicket = await new TicketService().getTicketById(ticket_id)
        if (!oldTicket || oldTicket.length === 0) {
            throw new Error(`O Ingresso número ${ticket_id} não existe`)
        }
        const payload = await new TicketService().deleteTicket(ticket_id)
        res.status(204).send(payload)
        next()
    } catch {
        res.status(404).send({
            message: `falha ao deletar o ingresso com id ${req.params.ticket_id}`
        })
    }
}