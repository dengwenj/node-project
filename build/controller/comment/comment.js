"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_1 = require("../../service/comment");
class CommentController {
    // 发表评论
    async create(ctx, next) {
        const { content, sayId } = ctx.request.body;
        const { id: userId } = ctx.result;
        // 操作数据库添加评论
        const res = await comment_1.commentservice.create(content, sayId, userId);
        ctx.body = res;
    }
    // 回复评论
    async reply(ctx, next) {
        const { content, sayId } = ctx.request.body;
        const { commentId } = ctx.params;
        const { id: userId } = ctx.result;
        // 操作数据库
        const res = await comment_1.commentservice.reply(content, sayId, commentId, userId);
        ctx.body = res;
    }
    // 修改评论
    async update(ctx, next) {
        const { content } = ctx.request.body;
        const { commentId } = ctx.params;
        // 操作数据库
        const res = await comment_1.commentservice.update(content, commentId);
        ctx.body = res;
    }
    // 删除评论
    async remove(ctx, next) {
        const { commentId } = ctx.params;
        // 操作数据库
        const res = await comment_1.commentservice.remove(commentId);
        ctx.body = res;
    }
    // 获取评论
    async list(ctx, next) {
        const { sayId, offset, limit } = ctx.query;
        // 操作数据库拿到评论列表 
        const res = await comment_1.commentservice.list(sayId, offset, limit);
        ctx.body = res;
    }
}
exports.default = new CommentController();
