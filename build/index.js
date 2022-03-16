"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = (0, tslib_1.__importStar)(require("./app"));
require("./database");
app_1.default.listen(app_1.env.APP_PORT, () => {
    console.log(`服务器启动 ${app_1.env.APP_PORT} 端口成功~`);
});
