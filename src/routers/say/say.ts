import Router from 'koa-router'

import { say } from '../../controller/say'
import { verifyAuth, verifyPermission } from '../../middleware/user'
import { verifyLabelExists } from '../../middleware/label'

const sayRouter = new Router()

// 发表动态
sayRouter.post('/say', verifyAuth, say.create)

// 获取某一条动态
sayRouter.get('/say/:sayId', say.detail)

// 获取多条动态
sayRouter.get('/say', say.list)

// 修改动态 用户必须登录，用户必须具备修改的权限
sayRouter.patch('/say/:sayId', verifyAuth, verifyPermission('say'), say.update)

// 删除动态
sayRouter.delete('/say/:sayId', verifyAuth, verifyPermission('say'), say.remove)

// 给动态添加标签
sayRouter.post('/say/:sayId/labels', verifyAuth, verifyPermission('say'), verifyLabelExists, say.labels)

// 获取动态的图片
sayRouter.get('/say/images/:filename', say.getPictureInfo) 

export default sayRouter
