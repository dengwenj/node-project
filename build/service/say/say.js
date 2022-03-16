"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var database_1 = (0, tslib_1.__importDefault)(require("../../database"));
var SayService = /** @class */ (function () {
    function SayService() {
    }
    // 发表动态
    SayService.prototype.create = function (id, content) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_1;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "INSERT INTO say (userId, content) VALUES (?, ?);";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, database_1.default.execute(statement, [id, content])];
                    case 2:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 获取某一条动态
    SayService.prototype.getSayById = function (id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_2;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "\n      SELECT \n        say.id id, say.content content, say.createAt createTime, say.updateAt updateTime,\n        JSON_OBJECT('id', users.id, 'name', users.username, 'avatarUrl', users.avatarUrl) author,\n        IF(COUNT(label.id),JSON_ARRAYAGG(JSON_OBJECT('id', label.id, 'name', label.name)),NULL) label,\n        (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:1120/say/images/', picture.fileName)) FROM picture WHERE picture.sayId = say.id) images\n      FROM say\n      LEFT JOIN users ON say.userId = users.id\n      LEFT JOIN say_label ON say.id = say_label.sayId\n      LEFT JOIN label ON say_label.labelId = label.id\n      GROUP BY say.id\n      HAVING say.id = ?;\n    ";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, database_1.default.execute(statement, [id])];
                    case 2:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 获取多条数据 
    SayService.prototype.getList = function (offset, limit) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_3;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "\n      SELECT \n        say.id id, say.content content, say.createAt createTime, say.updateAt updateTime,\n        JSON_OBJECT('id', users.id, 'name', users.username, 'avatarUrl', users.avatarUrl) author,\n        (SELECT COUNT(*) FROM comment WHERE comment.sayId = say.id) commentCount,\n        (SELECT COUNT(*) FROM say_label WHERE say_label.sayId = say.id) labelCount,\n        (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:1120/say/images/', picture.fileName)) FROM picture WHERE picture.sayId = say.id) images\n      FROM say\n      LEFT JOIN users ON say.userId = users.id\n      LIMIT ?, ?;\n    ";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, database_1.default.execute(statement, [offset, limit])];
                    case 2:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 3:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // 修改动态
    SayService.prototype.update = function (sayId, content) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_4;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "UPDATE say SET content = ? WHERE id = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [content, sayId])];
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
    // 删除动态
    SayService.prototype.remove = function (sayId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_5;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "DELETE FROM say WHERE id = ?;";
                        return [4 /*yield*/, database_1.default.execute(statement, [sayId])];
                    case 1:
                        res = (_a.sent())[0];
                        console.log(res, 'fffww');
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
    // 获取动态的图片
    SayService.prototype.getPictureInfo = function (filename) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_6;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "SELECT * FROM picture WHERE filename = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [filename])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 2:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return SayService;
}());
exports.default = new SayService();
