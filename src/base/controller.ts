import { Controller } from "burnjs";

export class BaseController extends Controller {
    Success(json: any) {
        this.ctx.set({
            "Content-Type": 'application/json',
        })
        this.ctx.body = JSON.stringify({
            status: 'good',
            data: json
        });
    }

}