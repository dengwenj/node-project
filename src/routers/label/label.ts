import Router from "koa-router"

import { verifyAuth } from "../../middleware/user"
import { label } from "../../controller/label"
import { labelOnly } from "../../middleware/label"

const commentRouter = new Router({ prefix: '/label' })

commentRouter.post('/', verifyAuth, labelOnly, label.create)

export default commentRouter
