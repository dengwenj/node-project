"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function useRoutes() {
    // readdirSync 可以读取某个文件夹下面的文件
    const files = (0, fs_1.readdirSync)(__dirname); // [ 'index.ts', 'user', 'types.ts' ]
    files.forEach(async (file) => {
        if (file === 'index.ts' || file === 'index.js') {
            const res = await Promise.resolve().then(() => __importStar(require(`./${file}`)));
            Object.keys(res).forEach((item) => {
                const value = res[item];
                this.use(value.routes());
                this.use(value.allowedMethods());
            });
        }
    });
}
exports.default = useRoutes;
