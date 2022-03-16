"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var koa_router_1 = (0, tslib_1.__importDefault)(require("koa-router"));
var comment_1 = require("../../controller/comment");
var user_1 = require("../../middleware/user");
var commentRouter = new koa_router_1.default({ prefix: '/comment' });
// 发表评论
commentRouter.post('/', user_1.verifyAuth, comment_1.comment.create);
// 回复评论
commentRouter.post('/:commentId/reply', user_1.verifyAuth, comment_1.comment.reply);
// 修改评论，只能修改自己的
commentRouter.patch('/:commentId', user_1.verifyAuth, (0, user_1.verifyPermission)('comment'), comment_1.comment.update);
// 删除评论
commentRouter.delete('/:commentId', user_1.verifyAuth, (0, user_1.verifyPermission)('comment'), comment_1.comment.remove);
// 获取评论列表
commentRouter.get('/', comment_1.comment.list);
exports.default = commentRouter;
