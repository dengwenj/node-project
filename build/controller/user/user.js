"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = (0, tslib_1.__importDefault)(require("fs"));
var jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
var user_1 = require("../../service/user");
var keysContent_1 = require("../../config/keysContent");
var filePath_1 = require("../../constants/filePath");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    // 用户注册
    UserController.prototype.create = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var user, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = ctx.request.body;
                        return [4 /*yield*/, user_1.userserice.create(user)
                            // 返回数据
                        ];
                    case 1:
                        res = _a.sent();
                        // 返回数据
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 用户登录
    UserController.prototype.login = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, password, userInfo, token;
            return (0, tslib_1.__generator)(this, function (_b) {
                _a = ctx.user, password = _a.password, userInfo = (0, tslib_1.__rest)(_a, ["password"]);
                token = jsonwebtoken_1.default.sign(userInfo, keysContent_1.privateContent, {
                    expiresIn: 60 * 60 * 24 * 30,
                    algorithm: 'RS256'
                });
                ctx.body = (0, tslib_1.__assign)((0, tslib_1.__assign)({}, userInfo), { token: token });
                return [2 /*return*/];
            });
        });
    };
    // 获取头像
    UserController.prototype.getAvatarByUserId = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var userId, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = ctx.params.userId;
                        return [4 /*yield*/, user_1.userserice.getAvatarInfoByUserId(userId)
                            // 图像信息
                        ];
                    case 1:
                        res = _a.sent();
                        // 图像信息
                        ctx.response.set('content-type', res[0].mimetype);
                        ctx.body = fs_1.default.createReadStream("".concat(filePath_1.filePath.AVATAR, "/").concat(res[0].fileName));
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取用户信息
    UserController.prototype.getUserInfoByUserId = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var userId, res, _a, password, userInfo;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = ctx.params.userId;
                        return [4 /*yield*/, user_1.userserice.getUserInfoByUserId(userId)];
                    case 1:
                        res = _b.sent();
                        _a = res[0], password = _a.password, userInfo = (0, tslib_1.__rest)(_a, ["password"]);
                        ctx.body = userInfo;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 修改用户信息
    UserController.prototype.addUserInfo = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var userInfo, userId, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfo = ctx.request.body;
                        userId = ctx.result.id;
                        return [4 /*yield*/, user_1.userserice.addUserInfo(userInfo, userId)];
                    case 1:
                        res = _a.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取用户动态
    UserController.prototype.getUserSayByUserId = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var userId, _a, _b, offset, _c, limit, res;
            return (0, tslib_1.__generator)(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        userId = ctx.params.userId;
                        _a = ctx.query, _b = _a.offset, offset = _b === void 0 ? '0' : _b, _c = _a.limit, limit = _c === void 0 ? '10' : _c;
                        return [4 /*yield*/, user_1.userserice.getUserSay(userId, offset, limit)];
                    case 1:
                        res = _d.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 验证授权
    UserController.prototype.success = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                ctx.body = '授权成功~';
                return [2 /*return*/];
            });
        });
    };
    return UserController;
}());
exports.default = new UserController();
