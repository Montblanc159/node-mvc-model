"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
// DB
dotenv_1.default.config();
typeorm_1.createConnection({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "test_blog",
    entities: [
        __dirname + "/models/*.js"
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));
// Routes
const posts_1 = __importDefault(require("./routes/posts"));
exports.app = express_1.default();
const port = 8080;
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
