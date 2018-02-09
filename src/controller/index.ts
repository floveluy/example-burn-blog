import { Controller, Blueprint } from 'burnjs';

@Blueprint.restfulClass('/article')
export default class Index extends Controller {
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
        this.ctx.set({
            "Content-Type": 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        const list = await this.ctx.service.article.list(5);
        this.ctx.body = JSON.stringify(list);
        this.ctx.set('Content-Type', 'application/json');
    }

    @Blueprint.options('/article')
    async option() {
        const ctx = this.ctx;
        ctx.set("Access-Control-Allow-Origin", "*");
        ctx.set("Access-Control-Allow-Credentials", 'true');
        ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
        ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
        ctx.set("X-Powered-By", ' 3.2.1');
        ctx.set("Content-Type", "application/json;charset=utf-8");
        if (ctx.request.method == "OPTIONS") {
            ctx.response.status = 200
        }
    }

    //发布文章的接口
    async Post() {
        console.log(this.ctx.request.body)
        await this.ctx.service.article.create();
        this.ctx.set({
            "Content-Type": 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        this.ctx.body = JSON.stringify({ good: 'niubi' });
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


