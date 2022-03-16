"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dotenv_1 = (0, tslib_1.__importDefault)(require("dotenv"));
dotenv_1.default.config();
var env = process.env;
exports.default = env;
