import connection from '../../database'
 
import type { IloginAndRegister } from './types'
class UserSercice {
  // 用户注册
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
  // 在用户注册之前判断用户名有没有被注册过
  async getUserByName(username: string) {
    const statement = `SELECT * FROM users WHERE username = ?;`
    try {
      const res = await connection.execute(statement, [username])
      return res[0]
    } catch (error) {
      console.log(error)
    }
  }

  // 获取头像信息
  async getAvatarInfoByUserId<T>(userId: T) {
    try {
      const statement = `SELECT * FROM avatar WHERE userId = ?`
      const [res] = await connection.execute(statement, [userId])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 存放头像路径
  async saveAvatarUrl(userId: number, avatarUrl: string) {
    try {
      const statement = `UPDATE users SET avatarUrl = ? WHERE id = ?`
      const [res] = await connection.execute(statement, [avatarUrl, userId])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 获取用户信息
  async getUserInfoByUserId<T>(userId: T) {
    try {
      const statement = `SELECT * FROM users WHERE id = ?`
      const [res] = await connection.execute(statement, [userId])
      return res
    } catch (error) {
      console.log(error)
    }
  }

  // 修改用户信息
  async addUserInfo(userInfo: any, userId: number) {
    const userInfoValue = []
    for (const value in userInfo) {
      userInfoValue.push(userInfo[value])
    }
    
    let userInfoKey = ''
    Object.keys(userInfo).forEach((item) => {
      userInfoKey = `${item} = ?,` + userInfoKey
    })
    const totleUserInfoKey = userInfoKey.slice(0, userInfoKey.length - 1)
    try {
      const statement = `UPDATE users SET ${totleUserInfoKey} WHERE id = ?`
      const [res] = await connection.execute(statement, [...userInfoValue, userId])
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserSercice()
