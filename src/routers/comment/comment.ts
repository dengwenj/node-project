import Router from 'koa-router'

import { comment } from '../../controller/comment'
import { verifyAuth, verifyPermission } from '../../middleware/user'

const commentRouter = new Router({ prefix: '/comment' })

// 发表评论
commentRouter.post('/', verifyAuth, comment.create)

// 回复评论
commentRouter.post('/:commentId/reply', verifyAuth, comment.reply)

// 修改评论，只能修改自己的
commentRouter.patch('/:commentId', verifyAuth, verifyPermission('comment'), comment.update)

// 删除评论
commentRouter.delete('/:commentId', verifyAuth, verifyPermission('comment'), comment.remove)

// 获取评论列表
commentRouter.get('/', comment.list)

export default commentRouter
