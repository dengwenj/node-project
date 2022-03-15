import Router from 'koa-router'

import { verifyAuth } from '../../middleware/user'
import { avatarHandler } from '../../middleware/file'

const fileRouter = new Router({ prefix: '/upload' })

fileRouter.post('/avatar', verifyAuth, avatarHandler)

export default fileRouter
