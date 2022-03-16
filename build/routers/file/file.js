"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_router_1 = (0, tslib_1.__importDefault)(require("koa-router"));
const user_1 = require("../../middleware/user");
const file_1 = require("../../middleware/file");
const file_2 = require("../../controller/file");
const fileRouter = new koa_router_1.default({ prefix: '/upload' });
// 上传头像
fileRouter.post('/avatar', user_1.verifyAuth, file_1.avatarHandler, file_2.file.saveAvatarInfo);
// 上传动态的图片
fileRouter.post('/picture/:sayId', user_1.verifyAuth, file_1.pictureHandler, file_1.pictureResize, file_2.file.savePictureInfo);
exports.default = fileRouter;
