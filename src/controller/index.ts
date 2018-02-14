import { Blueprint } from 'burnjs';
import { BaseController } from '../base/controller';
import { before, auth, bodyType, BaseDataModel, required } from "../extend/seri";

class ArticleDataModel extends BaseDataModel {
    @required
    articleID: string;
}


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
        const list = await this.ctx.service.article.list(5, parseInt(this.ctx.params.start));
        this.Success(list);
    }

    //发布文章的接口
    async Post() {
        await this.ctx.service.article.create();
        this.Success({});
    }


    //删除文章的接口
    @bodyType(ArticleDataModel)
    @before(auth)
    async Del(body: ArticleDataModel) {
        await this.ctx.model.article.destroy({
            where: {
                articleID: body.articleID
            }
        })
        const list = await this.ctx.service.article.list(5, 0);
        this.Success(list);
    }

    //更新文章的接口
    async Put() {
        await this.ctx.service.article.update();
    }
}


