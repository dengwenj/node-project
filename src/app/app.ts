import Koa from 'koa'
import bodyparser from 'koa-bodyparser'

import { userRouter } from '../routers/user'

const app = new Koa()

app.use(bodyparser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods)

export default app
