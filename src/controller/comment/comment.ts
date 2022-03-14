import { commentservice } from "../../service/comment"

import type { Context, Next } from "koa"

class CommentController {
  // 发表评论
  async create(ctx: Context, next: Next) {
    const { content, sayId } = ctx.request.body
    const { id: userId } = ctx.result
    
    // 操作数据库添加评论
    const res = await commentservice.create(content, sayId, userId)
    ctx.body = res
  }

  // 回复评论
  async reply(ctx: Context, next: Next) {
    const { content, sayId } = ctx.request.body
    const { commentId } = ctx.params
    const { id: userId } = ctx.result

    // 操作数据库
    const res = await commentservice.reply(content, sayId, commentId, userId)
    ctx.body = res
  }

  // 修改评论
  async update(ctx: Context, next: Next) {
    const { content } = ctx.request.body
    const { commentId } = ctx.params

    // 操作数据库
    const res = await commentservice.update(content, commentId)
    ctx.body = res
  }

  // 删除评论
  async remove(ctx: Context, next: Next) {
    const { commentId } = ctx.params

    // 操作数据库
    const res = await commentservice.remove(commentId)
    ctx.body = res
  }
}

export default new CommentController()
