import connection from '../../database'
 
import type { IloginAndRegister } from './types'
 
class UserSercice {
  async create({ username, password }: IloginAndRegister) {
    // 数据库的操作
    const statement = `INSERT INTO users (username, password) VALUES (?, ?)`
    try {   
      const res = await connection.execute(statement, [username, password])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserSercice()
