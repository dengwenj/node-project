"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
const user_1 = require("../../service/user");
const keysContent_1 = require("../../config/keysContent");
const filePath_1 = require("../../constants/filePath");
class UserController {
    // 用户注册
    async create(ctx, next) {
        // 获取用户请求传递的参数
        const user = ctx.request.body;
        // 查询数据
        const res = await user_1.userserice.create(user);
        // 返回数据
        ctx.body = res;
    }
    // 用户登录
    async login(ctx, next) {
        const { password, ...userInfo } = ctx.user;
        // 生成 token
        const token = jsonwebtoken_1.default.sign(userInfo, keysContent_1.privateContent, {
            expiresIn: 60 * 60 * 24 * 30,
            algorithm: 'RS256'
        });
        ctx.body = {
            ...userInfo,
            token
        };
    }
    // 获取头像
    async getAvatarByUserId(ctx, next) {
        const { userId } = ctx.params;
        // 根据 userId 去数据库拿对应的头像信息
        const res = await user_1.userserice.getAvatarInfoByUserId(userId);
        // 图像信息
        ctx.response.set('content-type', res[0].mimetype);
        ctx.body = fs_1.default.createReadStream(`${filePath_1.filePath.AVATAR}/${res[0].fileName}`);
    }
    // 获取用户信息
    async getUserInfoByUserId(ctx, next) {
        const { userId } = ctx.params;
        // 去数据库获取该用户的信息
        const res = await user_1.userserice.getUserInfoByUserId(userId);
        const { password, ...userInfo } = res[0];
        ctx.body = userInfo;
    }
    // 修改用户信息
    async addUserInfo(ctx, next) {
        const userInfo = ctx.request.body;
        const { id: userId } = ctx.result;
        // 去数据库修改数据
        const res = await user_1.userserice.addUserInfo(userInfo, userId);
        ctx.body = res;
    }
    // 获取用户动态
    async getUserSayByUserId(ctx, next) {
        const { userId } = ctx.params;
        const { offset = '0', limit = '10' } = ctx.query;
        // 去数据库拿该用户的动态
        const res = await user_1.userserice.getUserSay(userId, offset, limit);
        ctx.body = res;
    }
    // 验证授权
    async success(ctx, next) {
        ctx.body = '授权成功~';
    }
}
exports.default = new UserController();
