import { Controller, Blueprint } from 'burnjs';



export default class Index extends Controller {
    async insertModel(name: string) {
        console.log(this.ctx.body)
        await this.ctx.model[name].create(this.ctx.request.body);
    }

    @Blueprint.get('/article/:id')
    async getArticle() {
        this.ctx.body = this.ctx.params.id;
    }

    @Blueprint.post('/article')
    async createArticle() {
        await this.insertModel('article');
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


