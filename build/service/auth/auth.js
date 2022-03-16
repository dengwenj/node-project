"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var database_1 = (0, tslib_1.__importDefault)(require("../../database"));
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.checkTable = function (tableName, userId, id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var statement, res;
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        statement = "SELECT * FROM ".concat(tableName, " WHERE id = ? && userId = ?");
                        return [4 /*yield*/, database_1.default.execute(statement, [id, userId])];
                    case 1:
                        res = (_a.sent())[0];
                        return [2 /*return*/, res.length];
                }
            });
        });
    };
    return AuthService;
}());
exports.default = new AuthService;
