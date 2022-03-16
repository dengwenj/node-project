"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var koa_router_1 = (0, tslib_1.__importDefault)(require("koa-router"));
var user_1 = require("../../middleware/user");
var file_1 = require("../../middleware/file");
var file_2 = require("../../controller/file");
var fileRouter = new koa_router_1.default({ prefix: '/upload' });
// 上传头像
fileRouter.post('/avatar', user_1.verifyAuth, file_1.avatarHandler, file_2.file.saveAvatarInfo);
// 上传动态的图片
fileRouter.post('/picture/:sayId', user_1.verifyAuth, file_1.pictureHandler, file_1.pictureResize, file_2.file.savePictureInfo);
exports.default = fileRouter;
