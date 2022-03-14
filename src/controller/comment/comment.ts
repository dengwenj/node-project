import { commentservice } from "../../service/comment"

import type { Context, Next } from "koa"

class CommentController {
  async create(ctx: Context, next: Next) {
    const { content, sayId } = ctx.request.body
    const { id: userId } = ctx.result
    
    // 操作数据库添加评论
    const res = await commentservice.create(content, sayId, userId)
    ctx.body = res
  }
}

export default new CommentController()
