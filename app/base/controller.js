"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const burnjs_1 = require("burnjs");
class BaseController extends burnjs_1.Controller {
    Success(json) {
        this.ctx.set({
            "Content-Type": 'application/json',
        });
        this.ctx.body = JSON.stringify({
            status: 'good',
            data: json
        });
    }
}
exports.BaseController = BaseController;
