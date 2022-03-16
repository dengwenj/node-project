"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var koa_1 = (0, tslib_1.__importDefault)(require("koa"));
var koa_bodyparser_1 = (0, tslib_1.__importDefault)(require("koa-bodyparser"));
var useRoutes_1 = (0, tslib_1.__importDefault)(require("../routers/useRoutes"));
var error_handle_1 = (0, tslib_1.__importDefault)(require("./error-handle"));
var app = new koa_1.default();
app.useRoutes = useRoutes_1.default;
app.use((0, koa_bodyparser_1.default)());
// 这里动态加载路由的
app.useRoutes(app);
// 错误处理
app.on('error', error_handle_1.default);
exports.default = app;
