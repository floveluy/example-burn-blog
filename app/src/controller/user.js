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
function before(fn) {
    return function (target, property, propertyDescriptor) {
        let value = propertyDescriptor.value;
        propertyDescriptor.value = async function (...arg) {
            if (await fn.apply(this, [this])) {
                await value.apply(this, arg);
            }
        };
    };
}
async function auth(obj) {
    const authorization = obj.ctx.request.headers.authorization;
    if (authorization.indexOf('token ') >= 0) {
        const token = authorization.substr(6);
        const res = await obj.ctx.model.user.findOne({
            where: {
                loginToken: token
            }
        });
        if (res) {
            return true;
        }
    }
    obj.Fail();
    return false;
}
class User extends controller_1.BaseController {
    async checkAuth() {
        this.Success({});
    }
    //获取某个文章留言的接口
    async userLogin() {
        console.log(this.ctx.request.headers);
        const { userName, password } = this.ctx.request.body;
        const res = await this.ctx.model.user.findOne({
            where: {
                userName: userName
            }
        });
        if (res) {
            if (password === res['password'])
                this.Success({ token: '1234567890' });
            else
                this.Fail();
        }
        else
            this.Fail();
    }
}
__decorate([
    burnjs_1.Blueprint.get('/auth'),
    before(auth)
], User.prototype, "checkAuth", null);
__decorate([
    burnjs_1.Blueprint.post('/login')
], User.prototype, "userLogin", null);
exports.default = User;
