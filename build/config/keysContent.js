"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicContent = exports.privateContent = void 0;
var tslib_1 = require("tslib");
var fs_1 = (0, tslib_1.__importDefault)(require("fs"));
var path_1 = (0, tslib_1.__importDefault)(require("path"));
var privatePathname = path_1.default.resolve(__dirname, '../../keys/private.key');
var publicPathname = path_1.default.resolve(__dirname, '../../keys/public.key');
var privateContent = fs_1.default.readFileSync(privatePathname);
exports.privateContent = privateContent;
var publicContent = fs_1.default.readFileSync(publicPathname);
exports.publicContent = publicContent;