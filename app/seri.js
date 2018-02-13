"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
class Foo {
}
var json = { nadme: 'joe doe' }, foo = SerializationHelper.toInstance(new Foo(), json);
class Child extends Foo {
}
__decorate([
    required
], Child.prototype, "name", void 0);
function post(type) {
    return function (target, propertyKey, descriptor) {
        var orginFn = descriptor.value;
        descriptor.value = function (arg) {
            orginFn(SerializationHelper.toInstance(new type(), arg));
        };
    };
}
class Bar {
    foo(arg) {
        console.log(arg.name);
    }
}
__decorate([
    post(Child)
], Bar.prototype, "foo", null);
(new Bar()).foo(json);
