import { 
  USERNAME_OR_PASSWORD_IS_REQUIRED, 
  USERNAME_EXISTS,
  USERNAME_DOES_NOT_EXISTS,
  PASSWORD_ERROR,
  UNAUTHORIZATION,
  AUTHORIZATION_NOT_EXISTS,
  BAD_REQUEST,
  UNPERMISSION,
  LABEL_IS_ONLY
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
    case USERNAME_EXISTS:
      status = 409 // 冲突了
      message = '用户名已存在~'
      break
    case USERNAME_DOES_NOT_EXISTS:
      status = 400
      message = '用户名不存在~'
      break
    case PASSWORD_ERROR:
      status = 400
      message = '密码错误~'
      break
    case UNAUTHORIZATION:
      status = 401
      message = '未授权，token已过期~'
      break
    case AUTHORIZATION_NOT_EXISTS:
      status = 401
      message = 'authorization not exists'
      break
    case BAD_REQUEST:
      status = 400
      message = 'Bad Request'
      break
    case UNPERMISSION:
      status = 401
      message = '不具备权限~'
      break
    case LABEL_IS_ONLY:
      status = 400
      message = '标签是唯一的~'
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
