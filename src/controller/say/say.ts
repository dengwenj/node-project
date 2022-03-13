import { sayservice } from "../../service/say"
import { BAD_REQUEST } from "../../constants/error-types"

import type { Context, Next } from "koa"
import type { IContentJWT } from "../../middleware/user/verify/types"

class SayController {
  // 发表动态
  async create(ctx: IContentJWT, next: Next) {
    // 获取数据
    const { content } = ctx.request.body
    const { id } = ctx.result

    // 把数据添加到数据库里面
    const res = await sayservice.create(id, content)

    ctx.body = res
  }

  // 获取某一条动态
  async detail(ctx: Context, next: Next) {
    const { sayId } = ctx.params

    // 去数据库中拿某一条动态
    const res: any = await sayservice.getSayById(sayId)
    ctx.body = res[0]
  }

  // 获取多条动态
  async list(ctx: Context, next: Next) {
    // 判断有没有 query 参数
    if (!Object.keys(ctx.query).length) {
      const error = new Error(BAD_REQUEST)
      ctx.app.emit('error', error, ctx)
      return
    }
    
    const { offset, limit } = ctx.query
    // 去数据库拿多条动态
    const res = await sayservice.getList(offset, limit)
    ctx.body = res
  }
}

export default new SayController()
