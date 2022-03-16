"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const label_1 = require("../../service/label");
const verifyLabelExists = async (ctx, next) => {
    const { labels } = ctx.request.body;
    const labelArr = [];
    for (const value of labels) {
        const label = { name: value };
        const res1 = await label_1.labelservice.only(value);
        if (!res1.length) {
            // 添加标签
            const res2 = await label_1.labelservice.create(value);
            label.id = res2.insertId;
        }
        else {
            label.id = res1[0].id;
        }
        labelArr.push(label);
    }
    ctx.labelArr = labelArr;
    await next();
};
exports.default = verifyLabelExists;
