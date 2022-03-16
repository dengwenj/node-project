"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var koa_router_1 = (0, tslib_1.__importDefault)(require("koa-router"));
var say_1 = require("../../controller/say");
var user_1 = require("../../middleware/user");
var label_1 = require("../../middleware/label");
var sayRouter = new koa_router_1.default();
// 发表动态
sayRouter.post('/say', user_1.verifyAuth, say_1.say.create);
// 获取某一条动态
sayRouter.get('/say/:sayId', say_1.say.detail);
// 获取多条动态
sayRouter.get('/say', say_1.say.list);
// 修改动态 用户必须登录，用户必须具备修改的权限
sayRouter.patch('/say/:sayId', user_1.verifyAuth, (0, user_1.verifyPermission)('say'), say_1.say.update);
// 删除动态
sayRouter.delete('/say/:sayId', user_1.verifyAuth, (0, user_1.verifyPermission)('say'), say_1.say.remove);
// 给动态添加标签
sayRouter.post('/say/:sayId/labels', user_1.verifyAuth, (0, user_1.verifyPermission)('say'), label_1.verifyLabelExists, say_1.say.labels);
// 获取动态的图片
sayRouter.get('/say/images/:filename', say_1.say.getPictureInfo);
exports.default = sayRouter;
