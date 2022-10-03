const UserService = require('../../services/userService/userService.js')

exports.get = async (req, res, next) => {
    try {
        const payload = await new UserService().getAllUsers()
        res.status(200, {message: "aaa"}).send(payload)
    } catch {
        res.status(400).send({
            message: "falha ao buscar os usuários"
        })
    }
}

exports.getById = async (req, res, next) => {
    try {
        const payload = await new UserService().getUserById(req.params.id)
        res.status(200).send(payload)
    } catch {
        res.status(400).send({
            message: `falha ao buscar o usuário com id ${req.params.id}`
        })
    }
}

exports.post = async (req, res, next) => {
    try {
        const payload = await new UserService().createUser(req.body)
        res.status(201).send(payload)
    } catch {
        res.status(400).send({
            message: "falha ao criar usuário"
        })
    }
}

exports.put = async (req, res, next) => {
    try {
        const id = req.params.id
        const oldTicket = await new UserService().getUserById(id)
        if (!oldTicket || oldTicket.length === 0) {
            throw new Error(`Usuário número ${id} não foi encontrado`)
        }
        const payload = await new UserService().updateUser(id, req.body)
        res.status(200).send(payload)
    } catch {
        res.status(404).send({
            message: `falha ao atualizar o usuário com id ${req.params.id}`
        })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const id = req.params.id
        const oldTicket = await new UserService().getUserById(id)
        if (!oldTicket || oldTicket.length === 0) {
            throw new Error(`O usuário número ${id} não existe`)
        }
        const payload = await new UserService().deleteUser(id)
        res.status(204).send(payload)
    } catch(error) {
        res.status(404).send({
            message: `falha ao deletar o usuário com id ${req.params.id}`
        })
    }
}

exports.login = async (req, res, next) => {
    try {
        const payload = await new UserService().checkUser(req.body)
        res.status(200).send(payload)
    } catch {
        res.status(401).send({
            message: "falha na autenticação"
        })
    }
}