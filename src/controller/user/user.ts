import { Context, Next }  from 'koa'

import { userserice } from '../../service/user'

class UserController {
  async create(ctx: Context, next: Next) {
    // 获取用户请求传递的参数
    const user = ctx.request.body
    // 查询数据
    const res = await userserice.create(user)
    // 返回数据
    ctx.body = res
  }
}

export default new UserController()
