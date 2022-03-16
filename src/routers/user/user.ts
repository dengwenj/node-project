import Router from 'koa-router'

import { user } from '../../controller/user'
import { 
  verifyUser,
   handlePassword, 
   verifyLogin,
   verifyAuth
} from '../../middleware/user'

const userRouter = new Router()

// 用户注册
userRouter.post('/register', verifyUser, handlePassword, user.create)

// 用户登录
userRouter.post('/login', verifyLogin, user.login)

// 获取头像
userRouter.get('/user/:userId/avatar', user.getAvatarByUserId)

// 获取用户信息 TODO
userRouter.get('/user/:userId', user.getUserInfoByUserId)

// 修改用户信息
userRouter.post('/user', verifyAuth, user.addUserInfo)

// 获取用户的动态
userRouter.get('/user/say/:userId', user.getUserSayByUserId)

// 验证授权
userRouter.get('/verify', verifyAuth, user.success)

export default userRouter










// userRouter.post('/', async (ctx, next) => {
//   // 给他卡起不让他结束，就不会响应，执行完了才会响应， await 不写的话 后面没东西了，就会返回 Not Found， 就是没写 ctx.body，
//   // 因为 process.nextTick 是异步的
//   await next() 11
//   next() 错误 not found
// }, (ctx, next) => {
//   process.nextTick(() => {
//     ctx.body = 11
//   })
// })