"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const database_1 = (0, tslib_1.__importDefault)(require("../../database"));
class AuthService {
    async checkTable(tableName, userId, id) {
        const statement = `SELECT * FROM ${tableName} WHERE id = ? && userId = ?`;
        const [res] = await database_1.default.execute(statement, [id, userId]);
        return res.length;
    }
}
exports.default = new AuthService;
