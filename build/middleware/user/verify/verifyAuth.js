"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
var keysContent_1 = require("../../../config/keysContent");
var error_types_1 = require("../../../constants/error-types");
// 验证授权
var verifyAuth = function (ctx, next) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var authorization, error, token, result, err_1, error;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                authorization = ctx.request.header.authorization;
                // authorization 当前端发送请求的时候 请求头里面没有 authorization
                if (!authorization) {
                    error = new Error(error_types_1.AUTHORIZATION_NOT_EXISTS);
                    ctx.app.emit('error', error, ctx);
                    return [2 /*return*/];
                }
                token = authorization.replace('Bearer ', '');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                result = jsonwebtoken_1.default.verify(token, keysContent_1.publicContent, {
                    algorithms: ['RS256']
                });
                ctx.result = result;
                return [4 /*yield*/, next()];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                error = new Error(error_types_1.UNAUTHORIZATION);
                ctx.app.emit('error', error, ctx);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.default = verifyAuth;
