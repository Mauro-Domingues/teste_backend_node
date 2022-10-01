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

  async updateTicket(ticket){
    return this.repository.update(ticket)
  }

  async deleteTicket(ticket){
    return this.repository.delete(ticket)
  }

}

module.exports = EventService