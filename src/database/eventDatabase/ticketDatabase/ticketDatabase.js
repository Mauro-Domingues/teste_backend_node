const db = require("../../dbConn.js")

const amountPerlot = 10 // Quantidade de ingressos do tipo por lote
const lane = 70 // Preço do ingresso na pista
const vip = 100 // Preço do ingresso vip
const cabin = 150 // Preço do ingresso no camarote
let days = 10 // Especifique de quantos em quantos dias são limitados os lotes para venda até a data do evento
let lot = 5 // Quantidade de lotes de vendas por evento
/*
Exemplo:
amountPerLot = 10 -> A cada 10 ingressos vendidos de um determinado tipo só é possível comprar para o próximo lote
let days = 10 -> A cada 10 dias de antecedência a data do evento um lote é especificado e o valor aumenta à medida que o lote aumenta
let lot = 5 -> São 5 lotes de vendas no máximo
*/ // Por enquanto inseridos manualmente, prioridade baixa. Vulnerabilidade: necessário atualizar a página após a compra

async function setLot(id, type) {
    let ActualData = new Date()
    const conn = await db.connectToMySql()

    const checkData = "SELECT * FROM event WHERE id = ?"
    const event = await conn.query(checkData, [id])
    const date = event[0]
    
    date.map(async(date) => {
        const eventData = date.data
        const milliseconds = (Date.parse(eventData) - (Date.parse(ActualData)))
        days = days * 86400000
        const dayBase = Math.floor((milliseconds/days)-1)
        if(dayBase > 0) {
            lot = lot - dayBase
        }
    })

    const check = "SELECT * FROM ticket WHERE id = ? AND type = ? AND lot = ?"
    let checkLot = await conn.query(check, [id, type, lot])
    while(checkLot[0].length > (amountPerlot - 1)){
        lot++
        checkLot = await conn.query(check, [id, type, lot])
    } 
    return lot
}

function setValue(type, lot) {
    let price
    switch(type){
        case 'Camarote':
            price = cabin
        break
        case 'Vip':
            price = vip
        break
        case 'Pista':
            price = lane
        break
        default: 
    }
    if(lot !== 1){
    return price = (price * (lot * 0.6))
    }else {return price}
}

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
        const query = "INSERT INTO ticket (id, bar_code, qr_code, price, type, lot) VALUES (?, ?, ?, ?, ?, ?)"
        const id = ticketData.id
        const type = ticketData.type
        const lot = await setLot(id, type)
        const price = setValue(type, lot)
        console.log(lot, price)
        const ticket = await conn.query(query, [
            id,
            ticketData.code,
            ticketData.code,
            price,
            type,
            lot
        ])
        return ticket
    }

    async update(ticketData) {
        const conn = await db.connectToMySql()
        const query = "UPDATE event SET type = ?, price = ? WHERE ticket_id = ?"
        const type = ticketData.type
        setValue(type, lot)
        const ticket = await conn.query(query, [
            ticketData.type,
            price,
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