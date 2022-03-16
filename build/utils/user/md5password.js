"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crypto_1 = (0, tslib_1.__importDefault)(require("crypto")); // node 里面自带的
var md5password = function (password) {
    // crypto 加密的意思
    var md5 = crypto_1.default.createHash('md5'); // 'md5' 要以 md5 的方式加密
    var finallyPassword = md5.update(password).digest('hex'); // 'hex' 以16进制。 转成 字符串
    return finallyPassword;
};
exports.default = md5password;
