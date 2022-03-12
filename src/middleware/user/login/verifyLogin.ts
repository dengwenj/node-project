import { userserice } from "../../../service/user"
import { 
  USERNAME_OR_PASSWORD_IS_REQUIRED,
  USERNAME_DOES_NOT_EXISTS,
  PASSWORD_ERROR
} from "../../../constants/error-types"
import { md5password } from "../../../utils/user"

import type { Context, Next } from "koa"
import type { IloginAndRegister } from "../../../service/user/types"
import type { IUser } from "../../../service/user/types"

const verifyLogin = async (ctx: Context, next: Next) => {
  // 获取用户名和密码
  const { username, password }: IloginAndRegister = ctx.request.body

  // 判断用户名和密码是否为空
  if (!username || !password) {
    const error = new Error(USERNAME_OR_PASSWORD_IS_REQUIRED)
    ctx.app.emit('error', error, ctx)
    return
  }

  // 判断用户是否存在(用户名不存在)
  const res: any = await userserice.getUserByName(username)
  const user: IUser = res[0]
  if (!user) {
    const error = new Error(USERNAME_DOES_NOT_EXISTS)
    ctx.app.emit('error', error, ctx)
    return
  }

  // 判断密码是否和数据库中的密码一直(加密后比较)
  if (md5password(password) !== user.password) {
    const error = new Error(PASSWORD_ERROR)
    ctx.app.emit('error', error, ctx)
    return
  }

  // 放行
  next()
}

export default verifyLogin
