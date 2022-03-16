"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jimp_1 = (0, tslib_1.__importDefault)(require("jimp"));
// 图片有多个大小
const pictureResize = async (ctx, next) => {
    const req = ctx.req;
    const { files } = req;
    for (const value of files) {
        jimp_1.default.read(value.path).then((res) => {
            res.resize(1280, jimp_1.default.AUTO).write(value.path + '-large');
            res.resize(640, jimp_1.default.AUTO).write(value.path + '-middle');
            res.resize(320, jimp_1.default.AUTO).write(value.path + '-small');
        });
    }
    await next();
};
exports.default = pictureResize;
