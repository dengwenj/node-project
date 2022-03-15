import { labelservice } from "../../service/label"

import type { Context, Next } from "koa"

class LabelController {
  async create(ctx: Context, next: Next) {
    const { labelName } = ctx.request.body
    const res = await labelservice.create(labelName)
    ctx.body = res
  }
}

export default new LabelController()
