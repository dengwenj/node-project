"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const file_1 = require("../../service/file");
const error_types_1 = require("../../constants/error-types");
const config_1 = (0, tslib_1.__importDefault)(require("../../app/config"));
const user_1 = require("../../service/user");
class fileController {
    // 上传头像
    async saveAvatarInfo(ctx, next) {
        // 获取信息
        const req = ctx.req;
        const { id: userId } = ctx.result;
        if (req.file) {
            const { filename, size, mimetype } = req.file;
            // 把头像数信息存到数据库，在这之前要判断下 avatar 表中有没有存储该用户的头像信息，没有存储的话才是插入，有的话更新
            const isAvatarInfo = await file_1.fileservice.isAvatarInfo(userId);
            if (!isAvatarInfo) {
                // 插入
                const res = await file_1.fileservice.avatarInfo(filename, size, mimetype, userId);
                if (!res) {
                    const error = new Error(error_types_1.BAD_REQUEST);
                    ctx.app.emit('error', error, ctx);
                    return;
                }
            }
            else {
                // 更新
                const res = await file_1.fileservice.updateAvatarInfo(filename, size, mimetype, userId);
                if (!res) {
                    const error = new Error(error_types_1.BAD_REQUEST);
                    ctx.app.emit('error', error, ctx);
                    return;
                }
            }
            // 把获取头像路径存放在 user 表里
            const avatarUrl = `${config_1.default.APP_HOST}:${config_1.default.APP_PORT}/user/${userId}/avatar`;
            const res1 = await user_1.userserice.saveAvatarUrl(userId, avatarUrl);
            ctx.body = '上传头像成功~';
            return;
        }
        const error = new Error(error_types_1.BAD_REQUEST);
        ctx.app.emit('error', error, ctx);
    }
    // 上传动态的图片
    async savePictureInfo(ctx, next) {
        const { id: userId } = ctx.result;
        const { sayId } = ctx.params;
        const req = ctx.req;
        for (const value of req.files) {
            const { filename, size, mimetype } = value;
            // 把数据存放到数据库中
            const res = await file_1.fileservice.createPicture(filename, size, mimetype, userId, sayId);
        }
        ctx.body = '上传动态图片成功!~';
    }
}
exports.default = new fileController();
