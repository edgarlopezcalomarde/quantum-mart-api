"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
app_1.default.listen(4000, function () {
    // eslint-disable-next-line no-console
    console.log('🚀 API is running on localhost:4000');
});
