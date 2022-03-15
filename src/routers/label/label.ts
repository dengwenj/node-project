import Router from "koa-router"

import { verifyAuth } from "../../middleware/user"
import { label } from "../../controller/label"

const commentRouter = new Router({ prefix: '/label' })

commentRouter.post('/', verifyAuth, label.create)

export default commentRouter
