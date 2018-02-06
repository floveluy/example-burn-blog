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
    async insertModel(name) {
        console.log(this.ctx.body);
        await this.ctx.model[name].create(this.ctx.request.body);
    }
    async getArticle() {
        const d = await this.ctx.model.article.findOne({
            where: {
                articleID: this.ctx.params.id
            }
        });
        if (d) {
            this.ctx.body = JSON.stringify(d);
        }
    }
    async Post() {
        await this.insertModel('article');
    }
    async Del() {
        const id = this.ctx.params.id;
        this.ctx.model.article.destroy({
            where: {
                id: id
            }
        });
    }
    async Put() {
        this.ctx.model.article.update({
            content: this.ctx.request.body.content,
            title: this.ctx.request.body.title
        }, {
            where: {
                articleId: this.ctx.request.body.articleId
            }
        });
    }
};
__decorate([
    burnjs_1.Blueprint.get('/article/:id')
], Index.prototype, "getArticle", null);
Index = __decorate([
    burnjs_1.Blueprint.restfulClass('/article')
], Index);
exports.default = Index;
