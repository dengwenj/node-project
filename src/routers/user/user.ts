import Router from 'koa-router'

import { user } from '../../controller/user'

const userRouter = new Router({ prefix: '/user' })

userRouter.post('/', user.create)

export default userRouter
