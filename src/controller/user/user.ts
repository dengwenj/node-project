import { userserice } from '../../service/user'

import type { Context, Next }  from 'koa'
import type { IloginAndRegister } from '../../service/user/types'

class UserController {
  // 用户注册
  async create(ctx: Context, next: Next) {
    // 获取用户请求传递的参数
    const user = ctx.request.body
    // 查询数据
    const res = await userserice.create(user)
    // 返回数据
    ctx.body = res
  }

  // 用户登录
  async login(ctx: Context, next: Next) {
    const { username }: IloginAndRegister = ctx.request.body
    ctx.body = `登录成功，${username}`
  }
}

export default new UserController()
