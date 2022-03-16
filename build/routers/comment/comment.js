"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_router_1 = (0, tslib_1.__importDefault)(require("koa-router"));
const comment_1 = require("../../controller/comment");
const user_1 = require("../../middleware/user");
const commentRouter = new koa_router_1.default({ prefix: '/comment' });
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
