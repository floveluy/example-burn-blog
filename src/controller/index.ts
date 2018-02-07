import { Controller, Blueprint } from 'burnjs';


@Blueprint.restfulClass('/article')
export default class Index extends Controller {

    //获取文章的接口
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

    //获取列表的接口
    @Blueprint.get('/articles/:start')
    async getArticleList() {
        const list = await this.ctx.model.article.findAll({
            limit: 5,
            offset: parseInt(this.ctx.params.start) * 5
        })
        this.ctx.body = JSON.stringify(list);
    }

    //发布文章的接口
    async Post() {
        this.ctx.model.article.create(this.ctx.request.body)
    }

    //删除文章的接口
    async Del() {
        const id = this.ctx.params.id;
        this.ctx.model.article.destroy({
            where: {
                id: id
            }
        })
    }

    //跟新文章的接口
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


