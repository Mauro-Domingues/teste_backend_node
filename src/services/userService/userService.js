const userDatabase = require('../../database/userDatabase/userDatabase.js')

class UserService {

  constructor(){
    this.repository = new userDatabase()
  }

  async getAllUsers(){
    return this.repository.get()
  }

  async getUserById(id){
    return this.repository.getById(id)
  }

  async createUser(user){
    return this.repository.create(user)
  }

  async updateUser(id, user){
    return this.repository.update(id, user)
  }

  async deleteUser(id){
    return this.repository.delete(id)
  }

  async checkUser(auth){
    return this.repository.login(auth)
  }

}

module.exports = UserService