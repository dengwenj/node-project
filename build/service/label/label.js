"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var database_1 = (0, tslib_1.__importDefault)(require("../../database"));
var LabelService = /** @class */ (function () {
    function LabelService() {
    }
    // 创建标签
    LabelService.prototype.create = function (name) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_1;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "INSERT INTO label (name) VALUES (?)";
                        return [4 /*yield*/, database_1.default.execute(statement, [name])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 标签是唯一的,不能重复
    LabelService.prototype.only = function (name) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_2;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "SELECT * FROM label WHERE name = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [name])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // 把拿到的标签放入关系表中
    LabelService.prototype.addLabel = function (labelId, sayId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "INSERT INTO say_label (labelId, sayId) VALUES (?, ?)";
                        return [4 /*yield*/, database_1.default.execute(statement, [labelId, sayId])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                }
            });
        });
    };
    // 当前一次插入过相同的标签过后下一次这个动态里就不在插相同的了
    LabelService.prototype.isExistsLabel = function (labelId, sayId) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "SELECT * FROM say_label WHERE sayId = ? && labelId = ?";
                        return [4 /*yield*/, database_1.default.execute(statement, [sayId, labelId])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res.length ? true : false];
                }
            });
        });
    };
    // 获取标签
    LabelService.prototype.getLabels = function (offset, limit) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res, error_3;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        statement = "\n        ".concat(offset && limit ? "SELECT * FROM label LIMIT ?, ?" : "SELECT * FROM label", "\n      ");
                        return [4 /*yield*/, database_1.default.execute(statement, offset && limit ? [offset, limit] : null)];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res];
                    case 2:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return LabelService;
}());
exports.default = new LabelService();
