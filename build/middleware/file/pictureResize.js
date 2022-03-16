"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jimp_1 = (0, tslib_1.__importDefault)(require("jimp"));
// 图片有多个大小
var pictureResize = function (ctx, next) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var req, files, _loop_1, _i, _a, value;
    return (0, tslib_1.__generator)(this, function (_b) {
        switch (_b.label) {
            case 0:
                req = ctx.req;
                files = req.files;
                _loop_1 = function (value) {
                    jimp_1.default.read(value.path).then(function (res) {
                        res.resize(1280, jimp_1.default.AUTO).write(value.path + '-large');
                        res.resize(640, jimp_1.default.AUTO).write(value.path + '-middle');
                        res.resize(320, jimp_1.default.AUTO).write(value.path + '-small');
                    });
                };
                for (_i = 0, _a = files; _i < _a.length; _i++) {
                    value = _a[_i];
                    _loop_1(value);
                }
                return [4 /*yield*/, next()];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = pictureResize;
