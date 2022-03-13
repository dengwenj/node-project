import Koa from 'koa'
import bodyparser from 'koa-bodyparser'

import useRoutes from '../routers/useRoutes'
import errorHandle from './error-handle'

import type { IApplication } from './types'

const app: IApplication = new Koa()

app.useRoutes = useRoutes

app.use(bodyparser())
// 这里动态加载路由的
app.useRoutes(app)

// 错误处理
app.on('error', errorHandle)

export default app
