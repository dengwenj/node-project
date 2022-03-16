"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var error_types_1 = require("../../../constants/error-types");
var user_1 = require("../../../service/user");
// 验证用户
var verifyUser = function (ctx, next) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var _a, username, password, error, res, error;
    return (0, tslib_1.__generator)(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = ctx.request.body, username = _a.username, password = _a.password;
                // 判断用户名和密码不能为空，不能不传 
                if (!username || !password) {
                    error = new Error(error_types_1.USERNAME_OR_PASSWORD_IS_REQUIRED);
                    ctx.app.emit('error', error, ctx);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, user_1.userserice.getUserByName(username)
                    // 说明注册过的
                ];
            case 1:
                res = _b.sent();
                // 说明注册过的
                if (res.length) {
                    error = new Error(error_types_1.USERNAME_EXISTS);
                    ctx.app.emit('error', error, ctx);
                    return [2 /*return*/];
                }
                // 放行 相当于拦截器
                return [4 /*yield*/, next()];
            case 2:
                // 放行 相当于拦截器
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = verifyUser;
