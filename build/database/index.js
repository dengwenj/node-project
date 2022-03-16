"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mysql2_1 = (0, tslib_1.__importDefault)(require("mysql2"));
const config_1 = (0, tslib_1.__importDefault)(require("../app/config"));
const connection = mysql2_1.default.createPool({
    host: config_1.default.MYSQL_HOST,
    database: config_1.default.MYSQL_DATABASE,
    user: config_1.default.MYSQL_USER,
    password: config_1.default.MYSQL_PASSWORD
});
connection.getConnection((err, connect) => {
    if (err) {
        console.log('数据库连接失败~', err);
        return;
    }
    console.log('数据库连接成功~');
});
exports.default = connection.promise();
