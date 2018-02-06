import { Controller, Blueprint } from 'burnjs';



export default class Index extends Controller {
    @Blueprint.get('/')
    async first() {
        this.ctx.service.svs.index()
        await this.ctx.model.article.create({
            id: Date.now(),
            title: '第一个标题',
            content: '第一个内容',
        })

    }
    
    @Blueprint.post('/post')
    async second() {
        this.ctx.service.svs.index()
    }

    @Blueprint.put('/put')
    async third() {
        this.ctx.service.svs.index()
    }
    @Blueprint.del('/del')
    async forth() {
        this.ctx.service.svs.index()
    }
}


