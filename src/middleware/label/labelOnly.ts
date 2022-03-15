import { labelservice } from "../../service/label"
import { LABEL_IS_ONLY } from "../../constants/error-types"

import type { Context, Next } from "koa"

const labelOnly = async (ctx: Context, next: Next) => {
  const { labelName } = ctx.request.body
  const res: any = await labelservice.only(labelName)
  // 说明创建过此标签
  if (res.length) {
    const error = new Error(LABEL_IS_ONLY)
    ctx.app.emit('error', error, ctx)
    return
  }

  await next()
}

export default labelOnly
