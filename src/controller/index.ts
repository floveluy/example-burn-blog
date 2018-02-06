import { Controller, Blueprint } from 'burnjs';


@Blueprint.restfulClass('/article/:id')
export default class Index extends Controller {
    async insertModel(name: string) {
        console.log(this.ctx.body)
        await this.ctx.model[name].create(this.ctx.request.body);
    }

    async Get() {
        this.ctx.body = this.ctx.params.id;
    }

    async Post() {
        this.ctx.body = this.ctx.params.id;
        await this.insertModel('article');
    }

    async Del() {

    }

    async Put() {

    }
}


