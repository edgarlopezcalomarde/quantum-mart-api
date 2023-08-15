"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var promise_1 = require("mysql2/promise");
var defaults_1 = require("./defaults");
exports.pool = (0, promise_1.createPool)({
    host: defaults_1.DBHOST,
    user: defaults_1.DBUSER,
    password: defaults_1.DBPASS,
    port: Number(defaults_1.DBPORT),
    database: defaults_1.DBNAME,
});
