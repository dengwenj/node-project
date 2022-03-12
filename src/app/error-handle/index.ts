import { USERNAME_OR_PASSWORD_IS_REQUIRED } from "../../constants/error-types"

import type { Context } from "koa"

const errorHandle = (error: Error, ctx: Context) => {
  let status
  let message
  switch (USERNAME_OR_PASSWORD_IS_REQUIRED) {
    case error.message:
      status = 400 // Bad Request
      message = USERNAME_OR_PASSWORD_IS_REQUIRED
      break
    default:
      status = 404
      message = 'Not Found'
      break
  }
  ctx.status = status
  ctx.body = message
}

export default errorHandle