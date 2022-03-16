"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
const keysContent_1 = require("../../../config/keysContent");
const error_types_1 = require("../../../constants/error-types");
// 验证授权
const verifyAuth = async (ctx, next) => {
    const { authorization } = ctx.request.header;
    // authorization 当前端发送请求的时候 请求头里面没有 authorization
    if (!authorization) {
        const error = new Error(error_types_1.AUTHORIZATION_NOT_EXISTS);
        ctx.app.emit('error', error, ctx);
        return;
    }
    const token = authorization.replace('Bearer ', '');
    try {
        const result = jsonwebtoken_1.default.verify(token, keysContent_1.publicContent, {
            algorithms: ['RS256']
        });
        ctx.result = result;
        await next();
    }
    catch (err) {
        const error = new Error(error_types_1.UNAUTHORIZATION);
        ctx.app.emit('error', error, ctx);
    }
};
exports.default = verifyAuth;
