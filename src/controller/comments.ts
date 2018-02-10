import { Blueprint } from 'burnjs';
import { BaseController } from '../base/controller';

export default class Index extends BaseController {
    //获取某个文章留言的接口
    @Blueprint.get('/comments/:articleId/:start')
    async Get() {
        const list = await this.ctx.service.comment.list(
            10000,
            this.ctx.params.start,
            this.ctx.params.articleId
        );
        this.Success(list);
    }

    //发布某个文章留言的接口
    @Blueprint.post('/comments')
    async Post() {
        await this.ctx.service.comment.create();
        this.Success({});
    }

    @Blueprint.del('/comments/:commentsId')
    //删除某个文章留言的接口
    async Del() {

    }
}


