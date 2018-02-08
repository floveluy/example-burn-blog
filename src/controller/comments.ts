import { Controller, Blueprint } from 'burnjs';

export default class Index extends Controller {
    //获取某个文章留言的接口
    @Blueprint.get('/comments/:articleId/:start')
    async Get() {
        this.ctx.body = await this.ctx.service.comment.list(
            5,
            this.ctx.params.start,
            this.ctx.params.articleId
        );
    }

    //发布某个文章留言的接口
    @Blueprint.post('/comments/:articleId')
    async Post() {

    }

    @Blueprint.del('/comments/:commentsId')
    //删除某个文章留言的接口
    async Del() {

    }
}


