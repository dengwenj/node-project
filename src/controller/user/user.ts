import jwt from 'jsonwebtoken'

import { userserice } from '../../service/user'
import { privateContent, publicContent } from '../../config/keysContent'

import type { Context, Next }  from 'koa'
import type { IContext } from '../../middleware/user/login/types'

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
  async login(ctx: IContext, next: Next) {
    const { password, ...userInfo } = ctx.user

    // 生成 token
    const token = jwt.sign(userInfo, privateContent, {
      expiresIn: 60 * 60 * 24 * 30,
      algorithm: 'RS256'
    })

    ctx.body = {
      ...userInfo,
      token
    }
  }

  // 验证授权
  async success(ctx: Context, next: Next) {
    ctx.body = '授权成功~'
  }
}

export default new UserController()
