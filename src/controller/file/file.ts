import { fileservice } from "../../service/file"

import { BAD_REQUEST } from "../../constants/error-types"
import env from '../../app/config'
import { userserice } from "../../service/user"

import type { Context, Next } from "koa"
import type { IIncomingMessage } from './types'


class fileController {
  // 上传头像
  async saveAvatarInfo(ctx: Context, next: Next) {
    // 获取信息
    const req: IIncomingMessage = ctx.req
    const { id: userId } = ctx.result
    
    if (req.file) {
      const { filename, size, mimetype } = req.file

      // 把头像数信息存到数据库，在这之前要判断下 avatar 表中有没有存储该用户的头像信息，没有存储的话才是插入，有的话更新
      const isAvatarInfo = await fileservice.isAvatarInfo(userId)
      if (!isAvatarInfo) {
        // 插入
        const res = await fileservice.avatarInfo(filename, size, mimetype, userId)
        if (!res) {
          const error = new Error(BAD_REQUEST)
          ctx.app.emit('error', error, ctx)
          return
        }
      } else {
        // 更新
        const res = await fileservice.updateAvatarInfo(filename, size, mimetype, userId)
        if (!res) {
          const error = new Error(BAD_REQUEST)
          ctx.app.emit('error', error, ctx)
          return
        }
      }
      
      // 把获取头像路径存放在 user 表里
      const avatarUrl = `${env.APP_HOST}:${env.APP_PORT}/user/${userId}/avatar`
      const res1 = await userserice.saveAvatarUrl(userId, avatarUrl)
      
      ctx.body = '上传头像成功~'
      return
    }
    const error = new Error(BAD_REQUEST)
    ctx.app.emit('error', error, ctx)
  }
}

export default new fileController()
