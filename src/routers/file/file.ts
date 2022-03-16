import Router from 'koa-router'

import { verifyAuth } from '../../middleware/user'
import { avatarHandler, pictureHandler, pictureResize } from '../../middleware/file'
import { file } from '../../controller/file'

const fileRouter = new Router({ prefix: '/upload' })

// 上传头像
fileRouter.post('/avatar', verifyAuth, avatarHandler, file.saveAvatarInfo)

// 上传动态的图片
fileRouter.post('/picture/:sayId', verifyAuth, pictureHandler, pictureResize, file.savePictureInfo)

export default fileRouter
