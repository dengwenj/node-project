"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const say_1 = require("../../service/say");
const label_1 = require("../../service/label");
const error_types_1 = require("../../constants/error-types");
const filePath_1 = require("../../constants/filePath");
class SayController {
    // 发表动态 
    // TODO 在发表动态的时候把数据什么类型的标签写上，传过来的是标签 id 在结合 标签 id 和 动态 id 把这个数据添加到 动态和标签的关系表中
    async create(ctx, next) {
        // 获取数据
        const { content } = ctx.request.body;
        const { id } = ctx.result;
        // 把数据添加到数据库里面
        const res = await say_1.sayservice.create(id, content);
        ctx.body = res;
    }
    // 获取某一条动态
    async detail(ctx, next) {
        const { sayId } = ctx.params;
        // 去数据库中拿某一条动态
        const res = await say_1.sayservice.getSayById(sayId);
        ctx.body = res[0];
    }
    // 获取多条动态
    async list(ctx, next) {
        // 判断有没有 query 参数
        if (!Object.keys(ctx.query).length) {
            const error = new Error(error_types_1.BAD_REQUEST);
            ctx.app.emit('error', error, ctx);
            return;
        }
        const { offset, limit } = ctx.query;
        // 去数据库拿多条动态
        const res = await say_1.sayservice.getList(offset, limit);
        ctx.body = res;
    }
    // 修改动态 
    async update(ctx, next) {
        const { sayId } = ctx.params;
        const { content } = ctx.request.body;
        // 修改数据库里面的动态
        const res = await say_1.sayservice.update(sayId, content);
        ctx.body = res;
    }
    // 删除动态
    async remove(ctx, next) {
        const { sayId } = ctx.params;
        // 操作数据库删除动态
        const res = await say_1.sayservice.remove(sayId);
        ctx.body = res;
    }
    // 给动态添加标签
    async labels(ctx, next) {
        const { labelArr } = ctx;
        const { sayId } = ctx.params;
        // 拿到了这些标签放入关系表中
        for (const value of labelArr) {
            const labelId = value.id;
            // 当前一次插入过相同的标签过后下一次就不在插了
            const isExistsLabel = await label_1.labelservice.isExistsLabel(labelId, sayId);
            if (!isExistsLabel) {
                await label_1.labelservice.addLabel(labelId, sayId);
            }
        }
        ctx.body = '给动态添加标签';
    }
    // 获取动态的图片
    async getPictureInfo(ctx, next) {
        let { filename } = ctx.params;
        const { type } = ctx.query;
        // 根据 filename 去数据库里面查找数据
        const res = await say_1.sayservice.getPictureInfo(filename);
        const types = ['small', 'middle', 'large'];
        if (types.some(item => item === type)) {
            filename = filename + '-' + type;
        }
        // 展示图片
        ctx.response.set('content-type', res[0].mimetype);
        ctx.body = fs_1.default.createReadStream(`${filePath_1.filePath.PICTURE}/${filename}`);
    }
}
exports.default = new SayController();
