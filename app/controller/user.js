"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const burnjs_1 = require("burnjs");
const controller_1 = require("../base/controller");
const seri_1 = require("../extend/seri");
class User extends controller_1.BaseController {
    async checkAuth() {
        // console.log(this.ctx.request.body);
        this.Success({});
    }
    async userLogin() {
        const { userName, password } = this.ctx.request.body;
        const res = await this.ctx.model.user.findOne({
            where: {
                userName: userName
            }
        });
        if (res) {
            if (password === res['password']) {
                this.Success({ token: '1234567890' });
                await this.ctx.model.user.update({ loginToken: '1234567890' }, {
                    where: {
                        userName: userName
                    }
                });
            }
            else
                this.Fail();
        }
        else
            this.Fail();
    }
}
__decorate([
    burnjs_1.Blueprint.get('/auth'),
    seri_1.before(seri_1.auth)
], User.prototype, "checkAuth", null);
__decorate([
    burnjs_1.Blueprint.post('/login')
], User.prototype, "userLogin", null);
exports.default = User;
