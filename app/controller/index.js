"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const burnjs_1 = require("burnjs");
let Index = class Index extends burnjs_1.Controller {
    //获取文章的接口
    async getArticle() {
        const articleEntity = await this.ctx.service.article.get();
        if (articleEntity) {
            this.ctx.body = JSON.stringify(articleEntity);
        }
        else {
            this.ctx.body = '没有文章';
        }
    }
    //获取列表的接口
    async getArticleList() {
        const list = await this.ctx.service.article.list(5);
        this.ctx.body = JSON.stringify(list);
        this.ctx.set('Content-Type', 'application/json');
    }
    //发布文章的接口
    async Post() {
        await this.ctx.service.article.create();
    }
    //删除文章的接口
    async Del() {
        await this.ctx.service.article.delete();
    }
    //更新文章的接口
    async Put() {
        await this.ctx.service.article.update();
    }
};
__decorate([
    burnjs_1.Blueprint.get('/article/:id')
], Index.prototype, "getArticle", null);
__decorate([
    burnjs_1.Blueprint.get('/articles/:start')
], Index.prototype, "getArticleList", null);
Index = __decorate([
    burnjs_1.Blueprint.restfulClass('/article')
], Index);
exports.default = Index;
