import jimp from 'jimp'

import type { Context, Next } from "koa"
import type { IIncomingMessage } from '../../controller/file/types'

// 图片有多个大小
const pictureResize = async (ctx: Context, next: Next) => {
  // const req: IIncomingMessage = ctx.req
  // const { files } = req

  // for (const value of files!) {
  //   jimp.read(value.path).then((res) => {
  //     res.resize(1280, jimp.AUTO).write(value.path + '-large')
  //     res.resize(640, jimp.AUTO).write(value.path + '-middle')
  //     res.resize(320, jimp.AUTO).write(value.path + '-small')
  //   })
  // }

  await next()
}

export default pictureResize
