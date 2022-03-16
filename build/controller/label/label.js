"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var label_1 = require("../../service/label");
var LabelController = /** @class */ (function () {
    function LabelController() {
    }
    LabelController.prototype.create = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var labelName, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        labelName = ctx.request.body.labelName;
                        return [4 /*yield*/, label_1.labelservice.create(labelName)];
                    case 1:
                        res = _a.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    // 获取标签
    LabelController.prototype.getLabels = function (ctx, next) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, offset, limit, res;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = ctx.query, offset = _a.offset, limit = _a.limit;
                        return [4 /*yield*/, label_1.labelservice.getLabels(offset, limit)];
                    case 1:
                        res = _b.sent();
                        ctx.body = res;
                        return [2 /*return*/];
                }
            });
        });
    };
    return LabelController;
}());
exports.default = new LabelController();
