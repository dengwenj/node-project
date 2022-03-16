"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_multer_1 = (0, tslib_1.__importDefault)(require("koa-multer"));
const filePath_1 = require("../../constants/filePath");
const upload = (0, koa_multer_1.default)({
    dest: filePath_1.filePath.AVATAR
});
const avatarHandler = upload.single('avatar');
exports.default = avatarHandler;
