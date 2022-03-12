import { 
  USERNAME_OR_PASSWORD_IS_REQUIRED,
  USENAME_EXISTS
} from "../../../constants/error-types"
import { userserice } from "../../../service/user"

import type { Context, Next } from "koa"
import type { IloginAndRegister } from "../../../service/user/types"

// 验证用户
const verifyUser = async (ctx: Context, next: Next) => {
  const { username, password }: IloginAndRegister = ctx.request.body
  // 判断用户名和密码不能为空，不能不传 
  if (!username || !password) {
    const error = new Error(USERNAME_OR_PASSWORD_IS_REQUIRED)
    ctx.app.emit('error', error, ctx)
    return
  }
  // 注册名字不能一样, 要去数据库里面查看
  const res: any = await userserice.getUserByName(username)  
  // 说明注册过的
  if (res.length) {
    const error = new Error(USENAME_EXISTS)
    ctx.app.emit('error', error, ctx)
    return
  }
  // 放行 相当于拦截器
  await next()
}

export default verifyUser
