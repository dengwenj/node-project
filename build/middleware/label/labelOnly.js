"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var label_1 = require("../../service/label");
var error_types_1 = require("../../constants/error-types");
var labelOnly = function (ctx, next) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var labelName, res, error;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                labelName = ctx.request.body.labelName;
                return [4 /*yield*/, label_1.labelservice.only(labelName)
                    // 说明创建过此标签
                ];
            case 1:
                res = _a.sent();
                // 说明创建过此标签
                if (res.length) {
                    error = new Error(error_types_1.LABEL_IS_ONLY);
                    ctx.app.emit('error', error, ctx);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, next()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = labelOnly;
