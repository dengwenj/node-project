import { labelservice } from "../../service/label"

import type { Context, Next } from "koa"

class LabelController {
  async create(ctx: Context, next: Next) {
    const { labelName } = ctx.request.body
    const res = await labelservice.create(labelName)
    ctx.body = res
  }

  // 获取标签
  async getLabels(ctx: Context, next: Next) {
    const { offset, limit } = ctx.query
    const res = await labelservice.getLabels(offset, limit)
    ctx.body = res
  }
}

export default new LabelController()
