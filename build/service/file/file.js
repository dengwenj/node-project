"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var database_1 = (0, tslib_1.__importDefault)(require("../../database"));
var fileservice = /** @class */ (function () {
    function fileservice() {
    }
    // 存储头像信息
    fileservice.prototype.avatarInfo = function (filename, size, mimetype, userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_1;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "INSERT INTO avatar (fileName, size, mimetype, userId) VALUES (?, ?, ?, ?)";
                        return [4 /*yield*/, database_1.default.execute(statement, [filename, size, mimetype, userId])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 判断下 avatar 表中有没有存储该用户的头像信息，没有存储的话才是插入，有的话更新
    fileservice.prototype.isAvatarInfo = function (userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_2;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "SELECT * FROM avatar WHERE userId = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [userId])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res.length ? true : false];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 当上传头像，用户原来上传过的
    fileservice.prototype.updateAvatarInfo = function (filename, size, mimetype, userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_3;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "UPDATE avatar SET fileName = ?, size = ?, mimetype = ? WHERE userId = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [filename, size, mimetype, userId])];
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
    // 上传动态图片的信息
    fileservice.prototype.createPicture = function (filename, size, mimetype, userId, sayId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_4;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "INSERT INTO picture (fileName, size, mimetype, userId, sayId) VALUES (?, ?, ?, ?, ?)";
                        return [4 /*yield*/, database_1.default.execute(statement, [filename, size, mimetype, userId, sayId])];
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
    return fileservice;
}());
exports.default = new fileservice();
