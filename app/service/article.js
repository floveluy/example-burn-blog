"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const burnjs_1 = require("burnjs");
class Article extends burnjs_1.Service {
    async get() {
        const d = await this.ctx.model.article.findOne({
            where: {
                articleID: this.ctx.params.id
            }
        });
        if (d) {
            return d;
        }
        return null;
    }
    async create() {
        this.ctx.model.article.create(this.ctx.request.body);
    }
    async update() {
        this.ctx.model.article.update({
            content: this.ctx.request.body.content,
            title: this.ctx.request.body.title
        }, {
            where: {
                articleId: this.ctx.request.body.articleId
            }
        });
    }
    async delete() {
        const id = this.ctx.params.id;
        this.ctx.model.article.destroy({
            where: {
                id: id
            }
        });
    }
    async list(limits) {
        const list = await this.ctx.model.article.findAll({
            limit: limits,
            offset: parseInt(this.ctx.params.start) * limits
        });
        if (list) {
            return list;
        }
        return null;
    }
}
exports.default = Article;
