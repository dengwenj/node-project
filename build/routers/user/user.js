"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_router_1 = (0, tslib_1.__importDefault)(require("koa-router"));
const user_1 = require("../../controller/user");
const user_2 = require("../../middleware/user");
const userRouter = new koa_router_1.default();
// 用户注册
userRouter.post('/register', user_2.verifyUser, user_2.handlePassword, user_1.user.create);
// 用户登录
userRouter.post('/login', user_2.verifyLogin, user_1.user.login);
// 获取头像
userRouter.get('/user/:userId/avatar', user_1.user.getAvatarByUserId);
// 获取用户信息 TODO
userRouter.get('/user/:userId', user_1.user.getUserInfoByUserId);
// 修改用户信息
userRouter.post('/user', user_2.verifyAuth, user_1.user.addUserInfo);
// 获取用户的动态
userRouter.get('/user/say/:userId', user_1.user.getUserSayByUserId);
// 验证授权
userRouter.get('/verify', user_2.verifyAuth, user_1.user.success);
exports.default = userRouter;
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
