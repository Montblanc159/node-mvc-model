"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const posts_1 = __importDefault(require("./routes/posts"));
exports.app = express_1.default();
const port = 3000;
exports.app.set('view engine', 'ejs');
exports.app.listen(port, () => {
    `Now listening on ${port}`;
});
exports.app.get('/', (req, res, next) => {
    req;
    next;
    res.render(path_1.default.join(__dirname + '/views/home/index.ejs'), { test: "Yeah" });
});
exports.app.use('/posts', posts_1.default);
