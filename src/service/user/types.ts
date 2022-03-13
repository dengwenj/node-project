export interface IloginAndRegister {
  username: string
  password: string
}

// 数据库中写的用户字段
export interface IUser {
  id: number
  username: string
  password: string
  createAt: Date
  updateAt: Date
}

export interface IJwtUser {
  id: number
  username: string
  createAt: string
  updateAt: string
  iat: number
  exp: number
}