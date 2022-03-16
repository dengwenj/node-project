"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_1 = (0, tslib_1.__importDefault)(require("koa"));
const koa_bodyparser_1 = (0, tslib_1.__importDefault)(require("koa-bodyparser"));
const useRoutes_1 = (0, tslib_1.__importDefault)(require("../routers/useRoutes"));
const error_handle_1 = (0, tslib_1.__importDefault)(require("./error-handle"));
const app = new koa_1.default();
app.useRoutes = useRoutes_1.default;
app.use((0, koa_bodyparser_1.default)());
// 这里动态加载路由的
app.useRoutes(app);
// 错误处理
app.on('error', error_handle_1.default);
exports.default = app;
