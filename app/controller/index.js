"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const burnjs_1 = require("burnjs");
class Index extends burnjs_1.Controller {
    async first() {
        this.ctx.service.svs.index();
    }
    async second() {
        this.ctx.service.svs.index();
    }
    async third() {
        this.ctx.service.svs.index();
    }
    async forth() {
        this.ctx.service.svs.index();
    }
}
__decorate([
    burnjs_1.Blueprint.get('/')
], Index.prototype, "first", null);
__decorate([
    burnjs_1.Blueprint.post('/post')
], Index.prototype, "second", null);
__decorate([
    burnjs_1.Blueprint.put('/put')
], Index.prototype, "third", null);
__decorate([
    burnjs_1.Blueprint.del('/del')
], Index.prototype, "forth", null);
exports.default = Index;
