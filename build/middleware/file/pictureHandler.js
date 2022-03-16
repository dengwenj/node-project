"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var koa_multer_1 = (0, tslib_1.__importDefault)(require("koa-multer"));
var filePath_1 = require("../../constants/filePath");
// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, filePath.PICTURE)
//     console.log(req);
//   },
//   filename(req, file, cb) {
//     // cb(null, file.originalname)
//   }
// })
// const upload = multer({
//   storage
// })
var upload = (0, koa_multer_1.default)({
    dest: filePath_1.filePath.PICTURE
});
var pictureHandler = upload.array('picture', 9);
exports.default = pictureHandler;
