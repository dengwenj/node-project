import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const userRouter = new Router({ prefix: '/user' })

userRouter.post('/', (ctx, next) => {
  ctx.body = '创建用户成功'
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

export default app
