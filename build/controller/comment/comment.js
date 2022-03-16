"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var comment_1 = require("../../service/comment");
var CommentController = /** @class */ (function () {
    function CommentController() {
    }
    // 发表评论
    CommentController.prototype.create = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, content, sayId, userId, res;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = ctx.request.body, content = _a.content, sayId = _a.sayId;
                        userId = ctx.result.id;
                        return [4 /*yield*/, comment_1.commentservice.create(content, sayId, userId)];
                    case 1:
                        res = _b.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 回复评论
    CommentController.prototype.reply = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, content, sayId, commentId, userId, res;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = ctx.request.body, content = _a.content, sayId = _a.sayId;
                        commentId = ctx.params.commentId;
                        userId = ctx.result.id;
                        return [4 /*yield*/, comment_1.commentservice.reply(content, sayId, commentId, userId)];
                    case 1:
                        res = _b.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 修改评论
    CommentController.prototype.update = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var content, commentId, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = ctx.request.body.content;
                        commentId = ctx.params.commentId;
                        return [4 /*yield*/, comment_1.commentservice.update(content, commentId)];
                    case 1:
                        res = _a.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 删除评论
    CommentController.prototype.remove = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var commentId, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        commentId = ctx.params.commentId;
                        return [4 /*yield*/, comment_1.commentservice.remove(commentId)];
                    case 1:
                        res = _a.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取评论
    CommentController.prototype.list = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, sayId, offset, limit, res;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = ctx.query, sayId = _a.sayId, offset = _a.offset, limit = _a.limit;
                        return [4 /*yield*/, comment_1.commentservice.list(sayId, offset, limit)];
                    case 1:
                        res = _b.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    return CommentController;
}());
exports.default = new CommentController();
