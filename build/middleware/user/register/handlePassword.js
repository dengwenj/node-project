"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var user_1 = require("../../../utils/user");
var handlePassword = function (ctx, next) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var password;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                password = ctx.request.body.password;
                ctx.request.body.password = (0, user_1.md5password)(password);
                // console.log(ctx.request.body.password) // e10adc3949ba59abbe56e057f20f883e
                return [4 /*yield*/, next()];
            case 1:
                // console.log(ctx.request.body.password) // e10adc3949ba59abbe56e057f20f883e
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = handlePassword;
