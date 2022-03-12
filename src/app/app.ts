import Koa from 'koa'
import bodyparser from 'koa-bodyparser'

import { userRouter } from '../routers/user'
import errorHandle from './error-handle'

const app = new Koa()

app.use(bodyparser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods)

// 错误处理
app.on('error', errorHandle)

export default app
