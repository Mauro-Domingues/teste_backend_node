const db = require("../../dbConn.js")

const amountPerlot = 10 // Quantidade de ingressos do tipo por lote
const lane = 70 // Preço do ingresso na pista
const vip = 100 // Preço do ingresso vip
const cabin = 150 // Preço do ingresso no camarote
let days = 10 // Especifique de quantos em quantos dias são limitados os lotes para venda até a data do evento
const ticketLot = 5 // Quantidade máxima de lotes de vendas por evento
// Por enquanto inseridos manualmente -> "prioridade baixa"

async function setLot(id, type) {
    let lot = ticketLot
    let actualData = new Date()
    const conn = await db.connectToMySql()

    const checkData = "SELECT * FROM event WHERE id = ?"
    const event = await conn.query(checkData, [id])
    const date = event[0]
    
    date.map(async(date) => {
        const eventData = date.data
        const milliseconds = (Date.parse(eventData) - (Date.parse(actualData)))
        let dayBase = Math.floor(milliseconds/(days * 86400000))
        dayBase > ticketLot ? dayBase = (ticketLot -1) : false    
        lot = lot - dayBase
    }) // Busca a data do evento e calcula a diferença da data atual para determinar o lote

    const check = "SELECT * FROM ticket WHERE id = ? AND type = ? AND lot = ?"
    let checkLot = await conn.query(check, [id, type, lot])
    while(checkLot[0].length > (amountPerlot - 1)){
        lot++
        checkLot = await conn.query(check, [id, type, lot])
    } // Busca a quantidade vendida do ingresso X por lote para determinar o lote final do ingresso
    lot > ticketLot ? lot = ticketLot : false 
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

    async getAll() {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM ticket"
        const [tickets] = await conn.query(query)
        return tickets
    }

    async get(id) {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM ticket WHERE id = ?"
        const [tickets] = await conn.query(query, [id])
        return tickets
    }

    async getById(ticket_id) {
        const conn = await db.connectToMySql()
        const query = "SELECT * FROM ticket WHERE ticket_id = ?"
        const [ticket] = await conn.query(query, [ticket_id])
        return ticket
    }

    async create(ticketData) {
        const conn = await db.connectToMySql()
        const query = "INSERT INTO ticket (id, bar_code, qr_code, price, type, lot) VALUES (?, ?, ?, ?, ?, ?)"
        const id = ticketData.id
        const type = ticketData.type
        const lot = await setLot(id, type)
        const price = setValue(type, lot)
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

    async update(ticket_id, ticketData) {
        const conn = await db.connectToMySql()
        const search = "SELECT * FROM ticket WHERE ticket_id = ?"
        const find = await conn.query(search, [ticket_id])
        let id = find[0]
        id.map((track) => {id = track.id})
        const query = "UPDATE ticket SET type = ?, price = ? WHERE ticket_id = ?"
        const type = ticketData.type
        const lot = await setLot(id, type)
        const price = setValue(type, lot)
        const ticket = await conn.query(query, [type, price, ticket_id])
        return ticket
    } 
    /* Tá um pouco bagunçado mas aqui ele vai antes de alterar a área do ingresso, validar se o lote ainda está disponível.
    Se não estiver ele altera o ingresso e o valor para o próximo lote e o cliente paga o preço atualizado*/

    async delete(ticket_id) {
        const conn = await db.connectToMySql()
        const query = "DELETE FROM ticket WHERE ticket_id = ?"
        const ticket = await conn.query(query, [ticket_id])
    }
}

module.exports = ticketDatabase