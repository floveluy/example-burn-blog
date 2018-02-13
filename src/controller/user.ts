import { Blueprint } from 'burnjs';
import { BaseController } from '../base/controller';


function before(fn: Function) {
    return function (target: any, property: string | symbol, propertyDescriptor: PropertyDescriptor) {
        let value: Function = propertyDescriptor.value;
        propertyDescriptor.value = function (...arg: any[]) {
            if (fn.apply(this, [this])) {
                value.apply(this, arg);
            }
        }
    }
}
function auth(obj: BaseController) {

    const authorization = obj.ctx.request.headers.authorization
    if (authorization.indexOf('token ') >= 0) {
        const token = authorization.substr(6);
        if (token === '1234567890')
            return true;
    }
    obj.Fail();
    return false;
}


export default class User extends BaseController {

    @Blueprint.get('/auth')
    @before(auth)
    async checkAuth() {
        this.Success({})
    }

    //获取某个文章留言的接口
    @Blueprint.post('/login')
    async userLogin() {
        console.log(this.ctx.request.headers)
        const { userName, password } = this.ctx.request.body;
        const res = await this.ctx.model.user.findOne({
            where: {
                userName: userName
            }
        })

        if (res) {
            if (password === (<any>res)['password'])
                this.Success({ token: '1234567890' })
            else
                this.Fail()
        } else
            this.Fail()
    }
}


