import Router from 'koa-router'

import { say } from '../../controller/say'
import { verifyAuth } from '../../middleware/user'

const sayRouter = new Router()

// 发表动态
sayRouter.post('/say', verifyAuth, say.create)

export default sayRouter
