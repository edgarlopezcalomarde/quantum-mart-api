"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBUSER = exports.DBNAME = exports.DBHOST = exports.DBPASS = exports.DBPORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.DBPORT = process.env.DB_PORT || 3306;
exports.DBPASS = process.env.DB_PASS;
exports.DBHOST = process.env.DB_HOST;
exports.DBNAME = process.env.DB_NAME;
exports.DBUSER = process.env.DB_USER;
