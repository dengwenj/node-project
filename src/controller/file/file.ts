import { fileservice } from "../../service/file"

import { BAD_REQUEST } from "../../constants/error-types"

import type { Context, Next } from "koa"
import type { IIncomingMessage } from './types'


class fileController {
  async saveAvatarInfo(ctx: Context, next: Next) {
    // 获取信息
    const req: IIncomingMessage = ctx.req
    const { id: userId } = ctx.result

    if (req.file) {
      const { filename, size, mimetype } = req.file

      // 吧数据保存到数据库
      const res = await fileservice.avatarInfo(filename, size, mimetype, userId)
      ctx.body = res
      return
    }
    const error = new Error(BAD_REQUEST)
    ctx.app.emit('error', error, ctx)
  }
}

export default new fileController()
