"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var file_1 = require("../../service/file");
var error_types_1 = require("../../constants/error-types");
var config_1 = (0, tslib_1.__importDefault)(require("../../app/config"));
var user_1 = require("../../service/user");
var fileController = /** @class */ (function () {
    function fileController() {
    }
    // 上传头像
    fileController.prototype.saveAvatarInfo = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var req, userId, _a, filename, size, mimetype, isAvatarInfo, res, error_1, res, error_2, avatarUrl, res1, error;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        req = ctx.req;
                        userId = ctx.result.id;
                        if (!req.file) return [3 /*break*/, 7];
                        _a = req.file, filename = _a.filename, size = _a.size, mimetype = _a.mimetype;
                        return [4 /*yield*/, file_1.fileservice.isAvatarInfo(userId)];
                    case 1:
                        isAvatarInfo = _b.sent();
                        if (!!isAvatarInfo) return [3 /*break*/, 3];
                        return [4 /*yield*/, file_1.fileservice.avatarInfo(filename, size, mimetype, userId)];
                    case 2:
                        res = _b.sent();
                        if (!res) {
                            error_1 = new Error(error_types_1.BAD_REQUEST);
                            ctx.app.emit('error', error_1, ctx);
                            return [2 /*return*/];
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, file_1.fileservice.updateAvatarInfo(filename, size, mimetype, userId)];
                    case 4:
                        res = _b.sent();
                        if (!res) {
                            error_2 = new Error(error_types_1.BAD_REQUEST);
                            ctx.app.emit('error', error_2, ctx);
                            return [2 /*return*/];
                        }
                        _b.label = 5;
                    case 5:
                        avatarUrl = "".concat(config_1.default.APP_HOST, ":").concat(config_1.default.APP_PORT, "/user/").concat(userId, "/avatar");
                        return [4 /*yield*/, user_1.userserice.saveAvatarUrl(userId, avatarUrl)];
                    case 6:
                        res1 = _b.sent();
                        ctx.body = '上传头像成功~';
                        return [2 /*return*/];
                    case 7:
                        error = new Error(error_types_1.BAD_REQUEST);
                        ctx.app.emit('error', error, ctx);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 上传动态的图片
    fileController.prototype.savePictureInfo = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var userId, sayId, req, _i, _a, value, filename, size, mimetype, res;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = ctx.result.id;
                        sayId = ctx.params.sayId;
                        req = ctx.req;
                        _i = 0, _a = req.files;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        value = _a[_i];
                        filename = value.filename, size = value.size, mimetype = value.mimetype;
                        return [4 /*yield*/, file_1.fileservice.createPicture(filename, size, mimetype, userId, sayId)];
                    case 2:
                        res = _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        ctx.body = '上传动态图片成功!~';
                        return [2 /*return*/];
                }
            });
        });
    };
    return fileController;
}());
exports.default = new fileController();
