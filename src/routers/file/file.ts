import Router from 'koa-router'

import { verifyAuth } from '../../middleware/user'
import { avatarHandler } from '../../middleware/file'
import { file } from '../../controller/file'

const fileRouter = new Router({ prefix: '/upload' })

// 上传头像
fileRouter.post('/avatar', verifyAuth, avatarHandler, file.saveAvatarInfo)

export default fileRouter
