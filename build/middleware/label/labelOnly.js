"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const label_1 = require("../../service/label");
const error_types_1 = require("../../constants/error-types");
const labelOnly = async (ctx, next) => {
    const { labelName } = ctx.request.body;
    const res = await label_1.labelservice.only(labelName);
    // 说明创建过此标签
    if (res.length) {
        const error = new Error(error_types_1.LABEL_IS_ONLY);
        ctx.app.emit('error', error, ctx);
        return;
    }
    await next();
};
exports.default = labelOnly;
