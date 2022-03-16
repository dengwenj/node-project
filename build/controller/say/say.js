"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = (0, tslib_1.__importDefault)(require("fs"));
var say_1 = require("../../service/say");
var label_1 = require("../../service/label");
var error_types_1 = require("../../constants/error-types");
var filePath_1 = require("../../constants/filePath");
var SayController = /** @class */ (function () {
    function SayController() {
    }
    // 发表动态 
    // TODO 在发表动态的时候把数据什么类型的标签写上，传过来的是标签 id 在结合 标签 id 和 动态 id 把这个数据添加到 动态和标签的关系表中
    SayController.prototype.create = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var content, id, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = ctx.request.body.content;
                        id = ctx.result.id;
                        return [4 /*yield*/, say_1.sayservice.create(id, content)];
                    case 1:
                        res = _a.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取某一条动态
    SayController.prototype.detail = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var sayId, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sayId = ctx.params.sayId;
                        return [4 /*yield*/, say_1.sayservice.getSayById(sayId)];
                    case 1:
                        res = _a.sent();
                        ctx.body = res[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取多条动态
    SayController.prototype.list = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var error, _a, offset, limit, res;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // 判断有没有 query 参数
                        if (!Object.keys(ctx.query).length) {
                            error = new Error(error_types_1.BAD_REQUEST);
                            ctx.app.emit('error', error, ctx);
                            return [2 /*return*/];
                        }
                        _a = ctx.query, offset = _a.offset, limit = _a.limit;
                        return [4 /*yield*/, say_1.sayservice.getList(offset, limit)];
                    case 1:
                        res = _b.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 修改动态 
    SayController.prototype.update = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var sayId, content, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sayId = ctx.params.sayId;
                        content = ctx.request.body.content;
                        return [4 /*yield*/, say_1.sayservice.update(sayId, content)];
                    case 1:
                        res = _a.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 删除动态
    SayController.prototype.remove = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var sayId, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sayId = ctx.params.sayId;
                        return [4 /*yield*/, say_1.sayservice.remove(sayId)];
                    case 1:
                        res = _a.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 给动态添加标签
    SayController.prototype.labels = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var labelArr, sayId, _i, labelArr_1, value, labelId, isExistsLabel;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        labelArr = ctx.labelArr;
                        sayId = ctx.params.sayId;
                        _i = 0, labelArr_1 = labelArr;
                        _a.label = 1;
                    case 1:
                        if (!(_i < labelArr_1.length)) return [3 /*break*/, 5];
                        value = labelArr_1[_i];
                        labelId = value.id;
                        return [4 /*yield*/, label_1.labelservice.isExistsLabel(labelId, sayId)];
                    case 2:
                        isExistsLabel = _a.sent();
                        if (!!isExistsLabel) return [3 /*break*/, 4];
                        return [4 /*yield*/, label_1.labelservice.addLabel(labelId, sayId)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5:
                        ctx.body = '给动态添加标签';
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取动态的图片
    SayController.prototype.getPictureInfo = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var filename, type, res, types;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filename = ctx.params.filename;
                        type = ctx.query.type;
                        return [4 /*yield*/, say_1.sayservice.getPictureInfo(filename)];
                    case 1:
                        res = _a.sent();
                        types = ['small', 'middle', 'large'];
                        if (types.some(function (item) { return item === type; })) {
                            filename = filename + '-' + type;
                        }
                        // 展示图片
                        ctx.response.set('content-type', res[0].mimetype);
                        ctx.body = fs_1.default.createReadStream("".concat(filePath_1.filePath.PICTURE, "/").concat(filename));
                        return [2 /*return*/];
                }
            });
        });
    };
    return SayController;
}());
exports.default = new SayController();
