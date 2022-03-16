"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const database_1 = (0, tslib_1.__importDefault)(require("../../database"));
class CommentService {
    // 发表评论
    async create(content, sayId, userId) {
        try {
            const statement = `INSERT INTO comment (content, sayId, userId) VALUES (?, ?, ?)`;
            const [res] = await database_1.default.execute(statement, [content, sayId, userId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 回复评论
    async reply(content, sayId, commentId, userId) {
        try {
            const statement = `INSERT INTO comment (content, sayId, commentId, userId) VALUES (?, ?, ?, ?)`;
            const [res] = await database_1.default.execute(statement, [content, sayId, commentId, userId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 修改评论
    async update(content, commentId) {
        try {
            const statement = `UPDATE comment SET content = ? WHERE id = ?`;
            const [res] = await database_1.default.execute(statement, [content, commentId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 删除评论
    async remove(commentId) {
        try {
            const statement = `DELETE FROM comment WHERE id = ?`;
            const [res] = await database_1.default.execute(statement, [commentId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 获取评论列表
    async list(sayId, offset, limit) {
        try {
            const statement = `
        SELECT 
          comment.id, comment.content, comment.commentId, comment.createAt,
          JSON_OBJECT('id', users.id, 'username', users.username) user
        FROM comment
        LEFT JOIN users ON comment.userId = users.id
        WHERE sayId = ?
        LIMIT ?, ?;
      `;
            const [res] = await database_1.default.execute(statement, [sayId, offset, limit]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new CommentService();
