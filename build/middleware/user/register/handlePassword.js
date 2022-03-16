"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../../utils/user");
const handlePassword = async (ctx, next) => {
    const { password } = ctx.request.body;
    ctx.request.body.password = (0, user_1.md5password)(password);
    // console.log(ctx.request.body.password) // e10adc3949ba59abbe56e057f20f883e
    await next();
};
exports.default = handlePassword;
