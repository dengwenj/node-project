"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../../../service/auth");
const error_types_1 = require("../../../constants/error-types");
// 具不具备权限
const verifyPermission = (tableName) => {
    return async (ctx, next) => {
        const { id: userId } = ctx.result;
        const id = ctx.params[`${tableName}Id`];
        // 操作数据库 匹配下 userId 和 sayId
        const isPermission = await auth_1.authservice.checkTable(tableName, userId, id);
        // 不具备权限
        if (!isPermission) {
            const error = new Error(error_types_1.UNPERMISSION);
            ctx.app.emit('error', error, ctx);
            return;
        }
        await next();
    };
};
exports.default = verifyPermission;
