"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_1 = require("fs");
function useRoutes() {
    var _this = this;
    // readdirSync 可以读取某个文件夹下面的文件
    var files = (0, fs_1.readdirSync)(__dirname); // [ 'index.ts', 'user', 'types.ts' ]
    files.forEach(function (file) { return (0, tslib_1.__awaiter)(_this, void 0, void 0, function () {
        var res_1;
        var _this = this;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(file === 'index.ts')) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.resolve().then(function () { return (0, tslib_1.__importStar)(require("./".concat(file))); })];
                case 1:
                    res_1 = _a.sent();
                    Object.keys(res_1).forEach(function (item) {
                        var value = res_1[item];
                        _this.use(value.routes());
                        _this.use(value.allowedMethods());
                    });
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); });
}
exports.default = useRoutes;
