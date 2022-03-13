import Router from 'koa-router'

import { say } from '../../controller/say'
import { verifyAuth } from '../../middleware/user'

const sayRouter = new Router()

// 发表动态
sayRouter.post('/say', verifyAuth, say.create)

// 获取某一条动态
sayRouter.get('/say/:sayId', say.detail)

// 获取多条动态
sayRouter.get('/say', say.list)

export default sayRouter
