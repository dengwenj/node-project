import connection from '../../database'
 
import type { IloginAndRegister } from './types'
 
class UserSercice {
  async create({ username, password }: IloginAndRegister) {
    // 数据库的操作
    const statement = `INSERT INTO users (username, password) VALUES (?, ?)`
    try {   
      const res = await connection.execute(statement, [username, password])
      return res[0]
    } catch (error) {
      console.log(error)
    }
  }

  async getUserByName(username: string) {
    const statement = `SELECT * FROM users WHERE username = ?;`
    try {
      const res = await connection.execute(statement, [username])
      return res[0]
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserSercice()
