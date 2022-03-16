"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const database_1 = (0, tslib_1.__importDefault)(require("../../database"));
class UserSercice {
    // 用户注册
    async create({ username, password }) {
        // 数据库的操作
        const statement = `INSERT INTO users (username, password) VALUES (?, ?)`;
        try {
            const res = await database_1.default.execute(statement, [username, password]);
            return res[0];
        }
        catch (error) {
            console.log(error);
        }
    }
    // 在用户注册之前判断用户名有没有被注册过
    async getUserByName(username) {
        const statement = `SELECT * FROM users WHERE username = ?;`;
        try {
            const res = await database_1.default.execute(statement, [username]);
            return res[0];
        }
        catch (error) {
            console.log(error);
        }
    }
    // 获取头像信息
    async getAvatarInfoByUserId(userId) {
        try {
            const statement = `SELECT * FROM avatar WHERE userId = ?`;
            const [res] = await database_1.default.execute(statement, [userId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 存放头像路径
    async saveAvatarUrl(userId, avatarUrl) {
        try {
            const statement = `UPDATE users SET avatarUrl = ? WHERE id = ?`;
            const [res] = await database_1.default.execute(statement, [avatarUrl, userId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 获取用户信息
    async getUserInfoByUserId(userId) {
        try {
            const statement = `SELECT * FROM users WHERE id = ?`;
            const [res] = await database_1.default.execute(statement, [userId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 修改用户信息
    async addUserInfo(userInfo, userId) {
        const userInfoValue = [];
        for (const value in userInfo) {
            userInfoValue.push(userInfo[value]);
        }
        let userInfoKey = '';
        Object.keys(userInfo).forEach((item) => {
            userInfoKey = userInfoKey + `${item} = ?,`;
        });
        const totleUserInfoKey = userInfoKey.slice(0, userInfoKey.length - 1);
        try {
            const statement = `UPDATE users SET ${totleUserInfoKey} WHERE id = ?`;
            const [res] = await database_1.default.execute(statement, [...userInfoValue, userId]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 获取用户动态
    async getUserSay(...args) {
        console.log(args);
        try {
            const statement = `
        SELECT 
          say.id id, say.content content, say.createAt createTime, say.updateAt updateTime,
          JSON_OBJECT('id', users.id, 'name', users.username, 'avatarUrl', users.avatarUrl) author,
          (SELECT COUNT(*) FROM comment WHERE comment.sayId = say.id) commentCount,
          (SELECT COUNT(*) FROM say_label WHERE say_label.sayId = say.id) labelCount,
          (SELECT JSON_ARRAYAGG(CONCAT('http://localhost:1120/say/images/', picture.fileName)) FROM picture WHERE picture.sayId = say.id) images
        FROM say
        LEFT JOIN users ON say.userId = users.id
        WHERE users.id = ?
        LIMIT ?, ?
      `;
            const [res] = await database_1.default.execute(statement, [...args]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new UserSercice();
