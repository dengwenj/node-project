"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const crypto_1 = (0, tslib_1.__importDefault)(require("crypto")); // node 里面自带的
const md5password = (password) => {
    // crypto 加密的意思
    const md5 = crypto_1.default.createHash('md5'); // 'md5' 要以 md5 的方式加密
    const finallyPassword = md5.update(password).digest('hex'); // 'hex' 以16进制。 转成 字符串
    return finallyPassword;
};
exports.default = md5password;
