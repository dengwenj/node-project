import { md5password } from "../../utils/user"

import type { Context, Next } from "koa"
import type { IloginAndRegister } from "../../service/user/types"

const handlePassword = async (ctx: Context, next: Next) => {
  const { password }: IloginAndRegister = ctx.request.body
  ctx.request.body.password = md5password(password)
  // console.log(ctx.request.body.password) // e10adc3949ba59abbe56e057f20f883e
  await next()
}

export default handlePassword
