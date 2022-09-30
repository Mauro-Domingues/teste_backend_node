const ticketDatabase = require('../../../database/eventDatabase/ticketDatabase/ticketDatabase.js')

class EventService {

  constructor(){
    this.repository = new ticketDatabase()
  }

  async getAllTickets(){
    return this.repository.get()
  }

  async getTicketById(id){
    return this.repository.getById(id)
  }

  async createTicket(ticket){
    return this.repository.create(ticket)
  }

  async updateTicket(id, arg){
    return this.repository.update(id, arg)
  }

  async deleteTicket(id){
    return this.repository.delete(id)
  }

}

module.exports = EventService