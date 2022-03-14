import Router from 'koa-router'

import { say } from '../../controller/say'
import { verifyAuth, verifyPermission } from '../../middleware/user'

const sayRouter = new Router()

// 发表动态
sayRouter.post('/say', verifyAuth, say.create)

// 获取某一条动态
sayRouter.get('/say/:sayId', say.detail)

// 获取多条动态
sayRouter.get('/say', say.list)

// 修改动态 用户必须登录，用户必须具备修改的权限
sayRouter.patch('/say/:sayId', verifyAuth, verifyPermission, say.update)

export default sayRouter
