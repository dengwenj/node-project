"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_types_1 = require("../../../constants/error-types");
const user_1 = require("../../../service/user");
// 验证用户
const verifyUser = async (ctx, next) => {
    const { username, password } = ctx.request.body;
    // 判断用户名和密码不能为空，不能不传 
    if (!username || !password) {
        const error = new Error(error_types_1.USERNAME_OR_PASSWORD_IS_REQUIRED);
        ctx.app.emit('error', error, ctx);
        return;
    }
    // 注册名字不能一样, 要去数据库里面查看
    const res = await user_1.userserice.getUserByName(username);
    // 说明注册过的
    if (res.length) {
        const error = new Error(error_types_1.USERNAME_EXISTS);
        ctx.app.emit('error', error, ctx);
        return;
    }
    // 放行 相当于拦截器
    await next();
};
exports.default = verifyUser;
