"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const database_1 = (0, tslib_1.__importDefault)(require("../../database"));
class fileservice {
    // 存储头像信息
    async avatarInfo(filename, size, mimetype, userId) {
        try {
            const statement = `INSERT INTO avatar (fileName, size, mimetype, userId) VALUES (?, ?, ?, ?)`;
            const [res] = await database_1.default.execute(statement, [filename, size, mimetype, userId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 判断下 avatar 表中有没有存储该用户的头像信息，没有存储的话才是插入，有的话更新
    async isAvatarInfo(userId) {
        try {
            const statement = `SELECT * FROM avatar WHERE userId = ?`;
            const [res] = await database_1.default.execute(statement, [userId]);
            return res.length ? true : false;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 当上传头像，用户原来上传过的
    async updateAvatarInfo(filename, size, mimetype, userId) {
        try {
            const statement = `UPDATE avatar SET fileName = ?, size = ?, mimetype = ? WHERE userId = ?`;
            const [res] = await database_1.default.execute(statement, [filename, size, mimetype, userId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 上传动态图片的信息
    async createPicture(filename, size, mimetype, userId, sayId) {
        try {
            const statement = `INSERT INTO picture (fileName, size, mimetype, userId, sayId) VALUES (?, ?, ?, ?, ?)`;
            const [res] = await database_1.default.execute(statement, [filename, size, mimetype, userId, sayId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new fileservice();
