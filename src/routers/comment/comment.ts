import Router from 'koa-router'

import { comment } from '../../controller/comment'
import { verifyAuth } from '../../middleware/user'

const commentRouter = new Router({ prefix: '/comment' })

// 发表评论
commentRouter.post('/', verifyAuth, comment.create)

// 回复评论
commentRouter.post('/:commentId/reply', verifyAuth, comment.reply)

export default commentRouter
