"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var koa_multer_1 = (0, tslib_1.__importDefault)(require("koa-multer"));
var filePath_1 = require("../../constants/filePath");
var upload = (0, koa_multer_1.default)({
    dest: filePath_1.filePath.AVATAR
});
var avatarHandler = upload.single('avatar');
exports.default = avatarHandler;
