"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const label_1 = require("../../service/label");
class LabelController {
    async create(ctx, next) {
        const { labelName } = ctx.request.body;
        const res = await label_1.labelservice.create(labelName);
        ctx.body = res;
    }
    // 获取标签
    async getLabels(ctx, next) {
        const { offset, limit } = ctx.query;
        const res = await label_1.labelservice.getLabels(offset, limit);
        ctx.body = res;
    }
}
exports.default = new LabelController();
