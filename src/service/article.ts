import { Service } from "burnjs";
import { ArticleModel } from "../model/article";

export default class Article extends Service {
    async get(): Promise<ArticleModel | null> {
        const d: any | null = await this.ctx.model.article.findOne({
            where: {
                articleID: this.ctx.params.id
            }
        })
        if (d) {
            return <ArticleModel>d
        }
        return null
    }

    async create() {
        // console.log(this.ctx.request.body)
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
            })
    }

    async delete() {
        const id = this.ctx.params.id;
        this.ctx.model.article.destroy({
            where: {
                id: id
            }
        })
    }

    async list(limits: number): Promise<ArticleModel[] | null> {
        const list = await this.ctx.model.article.findAll({
            limit: limits,
            offset: parseInt(this.ctx.params.start) * limits
        })
        if (list) {
            return <ArticleModel[]>list
        }
        return null
    }

}

declare module 'burnjs' {
    export interface FService {
        article: Article
    }
}