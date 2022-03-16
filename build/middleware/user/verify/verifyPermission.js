"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var auth_1 = require("../../../service/auth");
var error_types_1 = require("../../../constants/error-types");
// 具不具备权限
var verifyPermission = function (tableName) {
    return function (ctx, next) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var userId, id, isPermission, error;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = ctx.result.id;
                    id = ctx.params["".concat(tableName, "Id")];
                    return [4 /*yield*/, auth_1.authservice.checkTable(tableName, userId, id)
                        // 不具备权限
                    ];
                case 1:
                    isPermission = _a.sent();
                    // 不具备权限
                    if (!isPermission) {
                        error = new Error(error_types_1.UNPERMISSION);
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
};
exports.default = verifyPermission;
