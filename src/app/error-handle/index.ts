import { 
  USERNAME_OR_PASSWORD_IS_REQUIRED, 
  USENAME_EXISTS 
} from "../../constants/error-types"

import type { Context } from "koa"

const errorHandle = (error: Error, ctx: Context) => {
  let status
  let message
  switch (error.message) {
    case USERNAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 // Bad Request
      message = '用户名或密码不能为空~'
      break
    case USENAME_EXISTS:
      status = 409 // 冲突了
      message = '用户名已存在~'
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
