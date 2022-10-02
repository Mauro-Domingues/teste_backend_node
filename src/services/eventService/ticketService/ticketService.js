const ticketDatabase = require('../../../database/eventDatabase/ticketDatabase/ticketDatabase.js')

class EventService {

  constructor(){
    this.repository = new ticketDatabase()
  }

  async getEveryTicket(){
    return this.repository.getAll()
  }

  async getAllTickets(id){
    return this.repository.get(id)
  }

  async getTicketById(ticket_id){
    return this.repository.getById(ticket_id)
  }

  async createTicket(ticket){
    return this.repository.create(ticket)
  }

  async updateTicket(ticket_id, ticket){
    return this.repository.update(ticket_id, ticket)
  }

  async deleteTicket(ticket_id){
    return this.repository.delete(ticket_id)
  }

}

module.exports = EventService