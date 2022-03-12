import Router from 'koa-router'

import { user } from '../../controller/user'
import verifyUser from '../../middleware/user'

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/', verifyUser, user.create)

export default userRouter
