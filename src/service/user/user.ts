import type { IloginAndRegister } from './types'
 
class UserSercice {
  async create(user: IloginAndRegister) {
    console.log(user)
    return 'chengg'
  }
}

export default new UserSercice()
