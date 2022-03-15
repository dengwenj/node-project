import Router from "koa-router"

import { verifyAuth } from "../../middleware/user"
import { label } from "../../controller/label"
import { labelOnly } from "../../middleware/label"

const labelRouter = new Router({ prefix: '/label' })

// 创建标签
labelRouter.post('/', verifyAuth, labelOnly, label.create)

// 获取标签
labelRouter.get('/', label.getLabels)

export default labelRouter
