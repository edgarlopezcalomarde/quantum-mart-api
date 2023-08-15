"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValue = void 0;
var uuid_1 = require("uuid");
var UserValue = /** @class */ (function () {
    function UserValue(_a) {
        var name = _a.name, email = _a.email, description = _a.description;
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.email = email;
        this.description = description !== null && description !== void 0 ? description : 'default';
    }
    return UserValue;
}());
exports.UserValue = UserValue;
