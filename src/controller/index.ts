import { Blueprint } from 'burnjs';
import { BaseController } from '../base/controller';



@Blueprint.restfulClass('/article')
export default class Index extends BaseController {
    //获取文章的接口
    @Blueprint.get('/article/:id')
    async getArticle() {
        const articleEntity = await this.ctx.service.article.get();
        if (articleEntity) {
            this.ctx.body = JSON.stringify(articleEntity);
        } else {
            this.ctx.body = '没有文章';
        }
    }

    //获取列表的接口
    @Blueprint.get('/articles/:start')
    async getArticleList() {
        const list = await this.ctx.service.article.list(5);
        this.Success(list);
    }

    //发布文章的接口
    async Post() {
        await this.ctx.service.article.create();
        this.Success({});
    }

    //删除文章的接口
    async Del() {
        await this.ctx.service.article.delete();
    }

    //更新文章的接口
    async Put() {
        await this.ctx.service.article.update();
    }
}


