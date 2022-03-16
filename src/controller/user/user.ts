import fs from 'fs'

import jwt from 'jsonwebtoken'

import { userserice } from '../../service/user'
import { privateContent } from '../../config/keysContent'
import { filePath } from '../../constants/filePath'

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

  // 获取头像
  async getAvatarByUserId(ctx: Context, next: Next) {
    const { userId } = ctx.params

    // 根据 userId 去数据库拿对应的头像信息
    const res: any = await userserice.getAvatarInfoByUserId(userId)

    // 图像信息
    ctx.response.set('content-type', res[0].mimetype)
    ctx.body = fs.createReadStream(`${filePath.AVATAR}/${res[0].fileName}`)
  }

  // 获取用户信息
  async getUserInfoByUserId(ctx: Context, next: Next) {
    const { userId } = ctx.params
    
    // 去数据库获取该用户的信息
    const res: any = await userserice.getUserInfoByUserId(userId)
    const { password, ...userInfo } = res[0]
    ctx.body = userInfo
  }

  // 修改用户信息
  async addUserInfo(ctx: Context, next: Next) {
    const userInfo = ctx.request.body
    const { id: userId } = ctx.result

    // 去数据库修改数据
    const res = await userserice.addUserInfo(userInfo, userId)
    ctx.body = res
  }

  // 获取用户动态
  async getUserSayByUserId(ctx: Context, next: Next) {
    const { userId } = ctx.params
    const { offset = '0', limit = '10' } = ctx.query

    // 去数据库拿该用户的动态
    const res = await userserice.getUserSay(userId, offset, limit)
    ctx.body = res
  }

  // 验证授权
  async success(ctx: Context, next: Next) {
    ctx.body = '授权成功~'
  }
}

export default new UserController()
