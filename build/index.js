"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var app_1 = (0, tslib_1.__importStar)(require("./app"));
require("./database");
app_1.default.listen(app_1.env.APP_PORT, function () {
    console.log("\u670D\u52A1\u5668\u542F\u52A8 ".concat(app_1.env.APP_PORT, " \u7AEF\u53E3\u6210\u529F~"));
});
