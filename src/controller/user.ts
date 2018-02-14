import { Blueprint } from 'burnjs';
import { BaseController } from '../base/controller';
import { before, auth } from '../extend/seri';

export default class User extends BaseController {

    @Blueprint.get('/auth')
    @before(auth)
    async checkAuth() {
        // console.log(this.ctx.request.body);
        this.Success({})
    }

    @Blueprint.post('/login')
    async userLogin() {
        const { userName, password } = this.ctx.request.body;
        const res = await this.ctx.model.user.findOne({
            where: {
                userName: userName
            }
        })

        if (res) {
            if (password === (<any>res)['password']) {
                this.Success({ token: '1234567890' })
                await this.ctx.model.user.update({ loginToken: '1234567890' }, {
                    where: {
                        userName: userName
                    }
                })
            }
            else
                this.Fail()
        } else
            this.Fail()
    }
}


