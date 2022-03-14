import Router from 'koa-router'

import { comment } from '../../controller/comment'
import { verifyAuth } from '../../middleware/user'

const commentRouter = new Router({ prefix: '/comment' })

commentRouter.post('/', verifyAuth, comment.create)

export default commentRouter
