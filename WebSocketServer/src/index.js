"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routers_1 = __importDefault(require("./v1/routers"));
var cors_1 = __importDefault(require("cors"));
var socket_io_1 = __importDefault(require("socket.io"));
var app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/api/v1", routers_1.default);
var server = app.listen(app.get('port'), function () {
    console.log("server on");
});
var io = socket_io_1.default(server);
io.on('connection', function () {
    console.log("new connection");
});
