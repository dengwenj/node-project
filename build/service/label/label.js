"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const database_1 = (0, tslib_1.__importDefault)(require("../../database"));
class LabelService {
    // 创建标签
    async create(name) {
        try {
            const statement = `INSERT INTO label (name) VALUES (?)`;
            const [res] = await database_1.default.execute(statement, [name]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 标签是唯一的,不能重复
    async only(name) {
        try {
            const statement = `SELECT * FROM label WHERE name = ?`;
            const [res] = await database_1.default.execute(statement, [name]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    // 把拿到的标签放入关系表中
    async addLabel(labelId, sayId) {
        const statement = `INSERT INTO say_label (labelId, sayId) VALUES (?, ?)`;
        const [res] = await database_1.default.execute(statement, [labelId, sayId]);
        return res;
    }
    // 当前一次插入过相同的标签过后下一次这个动态里就不在插相同的了
    async isExistsLabel(labelId, sayId) {
        const statement = `SELECT * FROM say_label WHERE sayId = ? && labelId = ?`;
        const [res] = await database_1.default.execute(statement, [sayId, labelId]);
        return res.length ? true : false;
    }
    // 获取标签
    async getLabels(offset, limit) {
        try {
            const statement = `
        ${offset && limit ? `SELECT * FROM label LIMIT ?, ?` : `SELECT * FROM label`}
      `;
            const [res] = await database_1.default.execute(statement, offset && limit ? [offset, limit] : null);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new LabelService();
