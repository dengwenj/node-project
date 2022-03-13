import jwt from 'jsonwebtoken'

import { publicContent } from '../../../config/keysContent'
import { UNAUTHORIZATION } from '../../../constants/error-types'

import type { Context, Next } from "koa"

// 验证授权
const verifyAuth = async (ctx: Context, next: Next) => {
  const { authorization } = ctx.request.header
  const token = authorization?.replace('Bearer ', '')
  try {
    const res = jwt.verify(token!, publicContent, {
      algorithms: ['RS256']
    })
    await next()
  } catch (err) {
    const error = new Error(UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

export default verifyAuth
