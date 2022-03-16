"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var database_1 = (0, tslib_1.__importDefault)(require("../../database"));
var UserSercice = /** @class */ (function () {
    function UserSercice() {
    }
    // 用户注册
    UserSercice.prototype.create = function (_a) {
        var username = _a.username, password = _a.password;
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_1;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        statement = "INSERT INTO users (username, password) VALUES (?, ?)";
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, database_1.default.execute(statement, [username, password])];
                    case 2:
                        res = _b.sent();
                        return [2 /*return*/, res[0]];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 在用户注册之前判断用户名有没有被注册过
    UserSercice.prototype.getUserByName = function (username) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_2;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "SELECT * FROM users WHERE username = ?;";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, database_1.default.execute(statement, [username])];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res[0]];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 获取头像信息
    UserSercice.prototype.getAvatarInfoByUserId = function (userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_3;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "SELECT * FROM avatar WHERE userId = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [userId])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 存放头像路径
    UserSercice.prototype.saveAvatarUrl = function (userId, avatarUrl) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_4;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "UPDATE users SET avatarUrl = ? WHERE id = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [avatarUrl, userId])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 获取用户信息
    UserSercice.prototype.getUserInfoByUserId = function (userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_5;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "SELECT * FROM users WHERE id = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [userId])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 2:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 修改用户信息
    UserSercice.prototype.addUserInfo = function (userInfo, userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var userInfoValue, value, userInfoKey, totleUserInfoKey, statement, res, error_6;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userInfoValue = [];
                        for (value in userInfo) {
                            userInfoValue.push(userInfo[value]);
                        }
                        userInfoKey = '';
                        Object.keys(userInfo).forEach(function (item) {
                            userInfoKey = userInfoKey + "".concat(item, " = ?,");
                        });
                        totleUserInfoKey = userInfoKey.slice(0, userInfoKey.length - 1);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        statement = "UPDATE users SET ".concat(totleUserInfoKey, " WHERE id = ?");
                        return [4 /*yield*/, database_1.default.execute(statement, (0, tslib_1.__spreadArray)((0, tslib_1.__spreadArray)([], userInfoValue, true), [userId], false))];
                    case 2:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 3:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 获取用户动态
    UserSercice.prototype.getUserSay = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_7;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(args);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        statement = "\n        SELECT \n          say.id id, say.content content, say.createAt createTime, say.updateAt updateTime,\n          JSON_OBJECT('id', users.id, 'name', users.username, 'avatarUrl', users.avatarUrl) author,\n          (SELECT COUNT(*) FROM comment WHERE comment.sayId = say.id) commentCount,\n          (SELECT COUNT(*) FROM say_label WHERE say_label.sayId = say.id) labelCount,\n          (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:1120/say/images/', picture.fileName)) FROM picture WHERE picture.sayId = say.id) images\n        FROM say\n        LEFT JOIN users ON say.userId = users.id\n        WHERE users.id = ?\n        LIMIT ?, ?\n      ";
                        return [4 /*yield*/, database_1.default.execute(statement, (0, tslib_1.__spreadArray)([], args, true))];
                    case 2:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 3:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserSercice;
}());
exports.default = new UserSercice();
