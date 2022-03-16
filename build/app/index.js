"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
var tslib_1 = require("tslib");
var app_1 = (0, tslib_1.__importDefault)(require("./app"));
var config_1 = (0, tslib_1.__importDefault)(require("./config"));
exports.env = config_1.default;
exports.default = app_1.default;
