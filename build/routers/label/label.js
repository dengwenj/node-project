"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_router_1 = (0, tslib_1.__importDefault)(require("koa-router"));
const user_1 = require("../../middleware/user");
const label_1 = require("../../controller/label");
const label_2 = require("../../middleware/label");
const labelRouter = new koa_router_1.default({ prefix: '/label' });
// 创建标签
labelRouter.post('/', user_1.verifyAuth, label_2.labelOnly, label_1.label.create);
// 获取标签
labelRouter.get('/', label_1.label.getLabels);
exports.default = labelRouter;
