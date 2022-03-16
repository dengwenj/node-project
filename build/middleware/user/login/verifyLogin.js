"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var user_1 = require("../../../service/user");
var error_types_1 = require("../../../constants/error-types");
var user_2 = require("../../../utils/user");
var verifyLogin = function (ctx, next) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var _a, username, password, error, res, user, error, error;
    return (0, tslib_1.__generator)(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, username = _a.username, password = _a.password;
                // 判断用户名和密码是否为空
                if (!username || !password) {
                    error = new Error(error_types_1.USERNAME_OR_PASSWORD_IS_REQUIRED);
                    ctx.app.emit('error', error, ctx);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, user_1.userserice.getUserByName(username)];
            case 1:
                res = _b.sent();
                user = res[0];
                if (!user) {
                    error = new Error(error_types_1.USERNAME_DOES_NOT_EXISTS);
                    ctx.app.emit('error', error, ctx);
                    return [2 /*return*/];
                }
                // 判断密码是否和数据库中的密码一直(加密后比较)
                if ((0, user_2.md5password)(password) !== user.password) {
                    error = new Error(error_types_1.PASSWORD_ERROR);
                    ctx.app.emit('error', error, ctx);
                    return [2 /*return*/];
                }
                ctx.user = user;
                // 放行
                next();
                return [2 /*return*/];
        }
    });
}); };
exports.default = verifyLogin;
