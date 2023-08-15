"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockRepository = void 0;
var MockUsers = [
    { name: 'Paco', email: 'paco@example.com', id: '1' },
    { name: 'Pedro', email: 'pedro@example.com', id: '2' },
    { name: 'Pepe', email: 'pepe@example.com', id: '3' },
];
var MockRepository = /** @class */ (function () {
    function MockRepository() {
    }
    MockRepository.prototype.findUserById = function (id) {
        throw new Error('Method not implemented.');
    };
    MockRepository.prototype.registerUser = function (user) {
        throw new Error('Method not implemented.');
    };
    MockRepository.prototype.listOfUsers = function () {
        return new Promise(function (resolve, reject) {
            resolve(MockUsers);
        });
    };
    return MockRepository;
}());
exports.MockRepository = MockRepository;
