import { authservice } from "../../../service/auth"
import { UNPERMISSION } from "../../../constants/error-types"

import type { Context, Next } from "koa"

// 具不具备权限
const verifyPermission = async (ctx: Context, next: Next) => {
  const { id: userId } = ctx.result
  const { sayId } = ctx.params
  console.log(userId, sayId)
  
  // 操作数据库 匹配下 userId 和 sayId
  const isPermission = await authservice.authPermission(userId, sayId)
  // 不具备权限
  if (!isPermission) {
    const error = new Error(UNPERMISSION)
    ctx.app.emit('error', error, ctx)
    return
  }

  await next()
}

export default verifyPermission
