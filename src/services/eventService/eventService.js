const eventDatabase = require('../../database/eventDatabase/eventDatabase.js')

class EventService {

  constructor(){
    this.repository = new eventDatabase()
  }

  async getAllEvents(){
    return this.repository.get()
  }

  async getEventById(id){
    return this.repository.getById(id)
  }

  async createEvent(event){
    return this.repository.create(event)
  }

  async updateEvent(id, arg){
    return this.repository.update(id, arg)
  }

  async deleteEvent(id){
    return this.repository.delete(id)
  }

}

module.exports = EventService