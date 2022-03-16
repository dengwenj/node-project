"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var label_1 = require("../../service/label");
var verifyLabelExists = function (ctx, next) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
    var labels, labelArr, _i, labels_1, value, label, res1, res2;
    return (0, tslib_1.__generator)(this, function (_a) {
        switch (_a.label) {
            case 0:
                labels = ctx.request.body.labels;
                labelArr = [];
                _i = 0, labels_1 = labels;
                _a.label = 1;
            case 1:
                if (!(_i < labels_1.length)) return [3 /*break*/, 7];
                value = labels_1[_i];
                label = { name: value };
                return [4 /*yield*/, label_1.labelservice.only(value)];
            case 2:
                res1 = _a.sent();
                if (!!res1.length) return [3 /*break*/, 4];
                return [4 /*yield*/, label_1.labelservice.create(value)];
            case 3:
                res2 = _a.sent();
                label.id = res2.insertId;
                return [3 /*break*/, 5];
            case 4:
                label.id = res1[0].id;
                _a.label = 5;
            case 5:
                labelArr.push(label);
                _a.label = 6;
            case 6:
                _i++;
                return [3 /*break*/, 1];
            case 7:
                ctx.labelArr = labelArr;
                return [4 /*yield*/, next()];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.default = verifyLabelExists;
