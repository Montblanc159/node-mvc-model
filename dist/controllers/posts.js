"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function postsList(req, res, next) {
    res.render(path_1.default.join(__dirname + '/../' + '/views/posts/index.ejs'), { test: 1 + 1 });
}
exports.postsList = postsList;
function postDetail(req, res, next) {
    res.send('Testing controller for post detail');
}
exports.postDetail = postDetail;
