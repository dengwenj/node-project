"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_types_1 = require("../../constants/error-types");
var errorHandle = function (error, ctx) {
    var status;
    var message;
    switch (error.message) {
        case error_types_1.USERNAME_OR_PASSWORD_IS_REQUIRED:
            status = 400; // Bad Request
            message = '用户名或密码不能为空~';
            break;
        case error_types_1.USERNAME_EXISTS:
            status = 409; // 冲突了
            message = '用户名已存在~';
            break;
        case error_types_1.USERNAME_DOES_NOT_EXISTS:
            status = 400;
            message = '用户名不存在~';
            break;
        case error_types_1.PASSWORD_ERROR:
            status = 400;
            message = '密码错误~';
            break;
        case error_types_1.UNAUTHORIZATION:
            status = 401;
            message = '未授权，token已过期~';
            break;
        case error_types_1.AUTHORIZATION_NOT_EXISTS:
            status = 401;
            message = 'authorization not exists';
            break;
        case error_types_1.BAD_REQUEST:
            status = 400;
            message = 'Bad Request';
            break;
        case error_types_1.UNPERMISSION:
            status = 401;
            message = '不具备权限~';
            break;
        case error_types_1.LABEL_IS_ONLY:
            status = 400;
            message = '标签是唯一的~';
            break;
        default:
            status = 404;
            message = 'Not Found';
            break;
    }
    ctx.status = status;
    ctx.body = message;
};
exports.default = errorHandle;
