import { Controller, Blueprint } from 'burnjs';


@Blueprint.restfulClass('/article')
export default class Index extends Controller {
    async insertModel(name: string) {
        console.log(this.ctx.body)
        await this.ctx.model[name].create(this.ctx.request.body);
    }

    @Blueprint.get('/article/:id')
    async getArticle() {
        const d: any | null = await this.ctx.model.article.findOne({
            where: {
                articleID: this.ctx.params.id
            }
        })
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
        })
    }

    async Put() {
        this.ctx.model.article.update({
            content: this.ctx.request.body.content,
            title: this.ctx.request.body.title
        }, {
                where: {
                    articleId: this.ctx.request.body.articleId
                }
            })
    }
}


