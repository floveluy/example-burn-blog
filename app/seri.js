"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SerializationHelper {
    static toInstance(obj, jsonObj) {
        if (typeof obj["fromJSON"] === "function") {
            obj["fromJSON"](jsonObj);
        }
        else {
            for (var propName in jsonObj) {
                obj[propName] = jsonObj[propName];
            }
        }
        return obj;
    }
}
function required(target, propertyKey) {
    // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
    // propertyKey: 成员的名字
    Object.defineProperty(target, propertyKey, {
        get() {
            if (this.propertyKey === void 777) {
                throw new Error(`${propertyKey} 属性没有被序列化`);
            }
            return this.propertyKey;
        },
        set(ting) {
            this.propertyKey = ting;
        }
    });
}
exports.required = required;
class BaseDataModel {
}
exports.BaseDataModel = BaseDataModel;
function bodyType(type) {
    return function (target, propertyKey, descriptor) {
        var orginFn = descriptor.value;
        descriptor.value = async function () {
            await orginFn.call(this, SerializationHelper.toInstance(new type(), this.ctx.request.body));
        };
    };
}
exports.bodyType = bodyType;
