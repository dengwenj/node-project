import { sayservice } from "../../service/say"

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
  async getSayById(ctx: Context, next: Next) {
    const { sayId } = ctx.params

    // 去数据库中拿某一条动态
    const res: any = await sayservice.getSayById(sayId)
    ctx.body = res[0]
  }
}

export default new SayController()
