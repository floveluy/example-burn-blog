"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const burnjs_1 = require("burnjs");
const controller_1 = require("../base/controller");
class Index extends controller_1.BaseController {
    //获取某个文章留言的接口
    async Get() {
        const list = await this.ctx.service.comment.list(10000, this.ctx.params.start, this.ctx.params.articleId);
        this.Success(list);
    }
    //发布某个文章留言的接口
    async Post() {
        await this.ctx.service.comment.create();
        this.Success({});
    }
    //删除某个文章留言的接口
    async Del() {
    }
}
__decorate([
    burnjs_1.Blueprint.get('/comments/:articleId/:start')
], Index.prototype, "Get", null);
__decorate([
    burnjs_1.Blueprint.post('/comments')
], Index.prototype, "Post", null);
__decorate([
    burnjs_1.Blueprint.del('/comments/:commentsId')
    //删除某个文章留言的接口
], Index.prototype, "Del", null);
exports.default = Index;
