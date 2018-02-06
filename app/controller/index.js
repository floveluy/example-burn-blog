"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const burnjs_1 = require("burnjs");
let Index = class Index extends burnjs_1.Controller {
    async insertModel(name) {
        console.log(this.ctx.body);
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
};
Index = __decorate([
    burnjs_1.Blueprint.restfulClass('/article/:id')
], Index);
exports.default = Index;
