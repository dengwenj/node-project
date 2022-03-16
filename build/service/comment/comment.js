"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var database_1 = (0, tslib_1.__importDefault)(require("../../database"));
var CommentService = /** @class */ (function () {
    function CommentService() {
    }
    // 发表评论
    CommentService.prototype.create = function (content, sayId, userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_1;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "INSERT INTO comment (content, sayId, userId) VALUES (?, ?, ?)";
                        return [4 /*yield*/, database_1.default.execute(statement, [content, sayId, userId])];
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
    // 回复评论
    CommentService.prototype.reply = function (content, sayId, commentId, userId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_2;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "INSERT INTO comment (content, sayId, commentId, userId) VALUES (?, ?, ?, ?)";
                        return [4 /*yield*/, database_1.default.execute(statement, [content, sayId, commentId, userId])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 修改评论
    CommentService.prototype.update = function (content, commentId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_3;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "UPDATE comment SET content = ? WHERE id = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [content, commentId])];
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
    // 删除评论
    CommentService.prototype.remove = function (commentId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_4;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "DELETE FROM comment WHERE id = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [commentId])];
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
    // 获取评论列表
    CommentService.prototype.list = function (sayId, offset, limit) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_5;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "\n        SELECT \n          comment.id, comment.content, comment.commentId, comment.createAt,\n          JSON_OBJECT('id', users.id, 'username', users.username) user\n        FROM comment\n        LEFT JOIN users ON comment.userId = users.id\n        WHERE sayId = ?\n        LIMIT ?, ?;\n      ";
                        return [4 /*yield*/, database_1.default.execute(statement, [sayId, offset, limit])];
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
    return CommentService;
}());
exports.default = new CommentService();
