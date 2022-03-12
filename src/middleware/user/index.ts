import { USERNAME_OR_PASSWORD_IS_REQUIRED } from "../../constants/error-types"

import type { Context, Next } from "koa"

const verifyUser = (ctx: Context, next: Next) => {
  const { usename, password } = ctx.request.body
  // 判断用户名和密码不能为空，不能不传 
  if (!usename || !password || usename === '' || password === '') {
    const error = new Error(USERNAME_OR_PASSWORD_IS_REQUIRED)
    ctx.app.emit('error', error, ctx)
    return
  }

}

export default verifyUser
