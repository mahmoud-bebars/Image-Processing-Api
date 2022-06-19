"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
// importing the routes file
var Router_1 = __importDefault(require("./routes/Router"));
var PORT = 3000;
//create the server  with express
var server = (0, express_1.default)();
// HTTP request logger middleware
server.use((0, morgan_1.default)('dev'));
// registering the api route to the server
server.use('/', Router_1.default);
// initating the server
server.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log("\uD83D\uDE80 Server is UP and Running on http//:http://localhost:".concat(PORT));
});
exports.default = server;
