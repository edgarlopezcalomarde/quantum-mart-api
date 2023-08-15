"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var user_route_1 = __importDefault(require("./user/infraestructure/user.route"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/', user_route_1.default);
app.use(function (req, res, next) {
    res.status(404).json({ messagge: 'Endpoint not found' });
});
exports.default = app;
