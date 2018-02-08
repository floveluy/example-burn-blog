import { Service } from "burnjs";
import { CommmentModel } from "../model/comments";

export default class Comments extends Service {
    async get(): Promise<CommmentModel | null> {
        const d: any | null = await this.ctx.model.article.findOne({
            where: {
                articleID: this.ctx.params.id
            }
        })
        if (d) {
            return <CommmentModel>d
        }
        return null
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

    async list(limits: number, start: string, articleID: string): Promise<CommmentModel[] | null> {
        const list = await this.ctx.model.comments.findAll({
            where: {
                articleID
            },
            limit: limits,
            offset: parseInt(start) * limits
        })
        if (list) {
            return <CommmentModel[]>list
        }
        return null
    }

}

declare module 'burnjs' {
    export interface FService {
        comment: Comments
    }
}