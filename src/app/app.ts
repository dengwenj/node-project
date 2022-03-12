import Koa from 'koa'
import bodyparser from 'koa-bodyparser'

import useRoutes from '../routers'
import { userRouter } from '../routers/user'
import errorHandle from './error-handle'

import type { IApplication } from './types'

const app: IApplication = new Koa()

app.useRoutes = useRoutes

app.use(bodyparser())
app.useRoutes(app)

// 错误处理
app.on('error', errorHandle)

export default app
