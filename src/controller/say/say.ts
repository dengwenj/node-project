import { sayservice } from "../../service/say"

import type { Next } from "koa"
import type { IContentJWT } from "../../middleware/user/verify/types"

class SayController {
  async create(ctx: IContentJWT, next: Next) {
    // 获取数据
    const { content } = ctx.request.body
    const { id } = ctx.result

    // 把数据添加到数据库里面
    const res = await sayservice.create(id, content)
    
    ctx.body = res
  }
}

export default new SayController()
