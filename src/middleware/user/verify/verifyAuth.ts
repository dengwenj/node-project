import jwt from 'jsonwebtoken'

import { publicContent } from '../../../config/keysContent'
import { 
  UNAUTHORIZATION, 
  AUTHORIZATION_NOT_EXISTS 
} from '../../../constants/error-types'

import type { Context, Next } from "koa"

// 验证授权
const verifyAuth = async (ctx: Context, next: Next) => {
  const { authorization } = ctx.request.header

  // authorization 当前端发送请求的时候 请求头里面没有 authorization
  if (!authorization) {
    const error = new Error(AUTHORIZATION_NOT_EXISTS)
    ctx.app.emit('error', error, ctx)
    return
  }

  const token = authorization.replace('Bearer ', '')
  try {
    const res = jwt.verify(token, publicContent, {
      algorithms: ['RS256']
    })
    await next()
  } catch (err) {
    const error = new Error(UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

export default verifyAuth
