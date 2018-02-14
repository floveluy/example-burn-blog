import { BaseController } from "../base/controller";

class SerializationHelper {
    static toInstance<T>(obj: T, jsonObj: object): T {

        if (typeof (<any>obj)["fromJSON"] === "function") {
            (<any>obj)["fromJSON"](jsonObj);

        }
        else {
            for (var propName in jsonObj) {
                (<any>obj)[propName] = (<any>jsonObj)[propName]
            }
        }

        return obj;
    }
}


export function required(target: any, propertyKey: string) {
    // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
    // propertyKey: 成员的名字

    Object.defineProperty(target, propertyKey, {
        enumerable: true,
        get() {
            if ((<any>this).propertyKey === void 777) {
                throw new Error(`${propertyKey} 属性没有被序列化`);
            }
            return (<any>this).propertyKey
        },
        set(ting) {
            (<any>this).propertyKey = ting;
        }
    })
}


export class BaseDataModel {

}


export function bodyType(type: typeof BaseDataModel) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        var orginFn = descriptor.value;
        descriptor.value = async function () {
            await orginFn.call(this, SerializationHelper.toInstance(new type(), (<any>this).ctx.request.body))
        }
    }
}


export function before(fn: Function) {
    return function (target: any, property: string | symbol, propertyDescriptor: PropertyDescriptor) {
        let value: Function = propertyDescriptor.value;
        propertyDescriptor.value = async function (...arg: any[]) {
            if (await fn.apply(this, [this])) {
                await value.apply(this, arg);
            }
        }
    }
}

export async function auth(obj: BaseController) {

    const authorization = obj.ctx.request.headers.authorization
    if (authorization.indexOf('token ') >= 0) {
        const token = authorization.substr(6);
        const res = await obj.ctx.model.user.findOne({
            where: {
                loginToken: token
            }
        })
        if (res) {
            return true;
        }
    }
    obj.Fail();
    return false;
}

