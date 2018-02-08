"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const burnjs_1 = require("burnjs");
class Index extends burnjs_1.Controller {
    //获取某个文章留言的接口
    async Get() {
        this.ctx.body = await this.ctx.service.comment.list(5, this.ctx.params.start, this.ctx.params.articleId);
    }
    //发布某个文章留言的接口
    async Post() {
    }
    //删除某个文章留言的接口
    async Del() {
    }
}
__decorate([
    burnjs_1.Blueprint.get('/comments/:articleId/:start')
], Index.prototype, "Get", null);
__decorate([
    burnjs_1.Blueprint.post('/comments/:articleId')
], Index.prototype, "Post", null);
__decorate([
    burnjs_1.Blueprint.del('/comments/:commentsId')
    //删除某个文章留言的接口
], Index.prototype, "Del", null);
exports.default = Index;
