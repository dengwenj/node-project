"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../../service/user");
const error_types_1 = require("../../../constants/error-types");
const user_2 = require("../../../utils/user");
const verifyLogin = async (ctx, next) => {
    // 获取用户名和密码
    const { username, password } = ctx.request.body;
    // 判断用户名和密码是否为空
    if (!username || !password) {
        const error = new Error(error_types_1.USERNAME_OR_PASSWORD_IS_REQUIRED);
        ctx.app.emit('error', error, ctx);
        return;
    }
    // 判断用户是否存在(用户名不存在)
    const res = await user_1.userserice.getUserByName(username);
    const user = res[0];
    if (!user) {
        const error = new Error(error_types_1.USERNAME_DOES_NOT_EXISTS);
        ctx.app.emit('error', error, ctx);
        return;
    }
    // 判断密码是否和数据库中的密码一直(加密后比较)
    if ((0, user_2.md5password)(password) !== user.password) {
        const error = new Error(error_types_1.PASSWORD_ERROR);
        ctx.app.emit('error', error, ctx);
        return;
    }
    ctx.user = user;
    // 放行
    next();
};
exports.default = verifyLogin;
