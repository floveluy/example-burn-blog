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


function required(target: any, propertyKey: string) {
    // target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
    // propertyKey: 成员的名字
    Object.defineProperty(target, propertyKey, {
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


class Foo {

}

var json = { nadme: 'joe doe' },
    foo = SerializationHelper.toInstance(new Foo(), json);


class Child extends Foo {
    @required
    name: string;
}

function post(type: typeof Foo) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        var orginFn = descriptor.value;

        descriptor.value = function (arg: any) {
            
            orginFn(SerializationHelper.toInstance(new type(), arg));
        }
    }
}


class Bar {
    @post(Child)
    foo(arg: Child) {
        console.log(arg.name);
    }
}


(<any>(new Bar())).foo(json);
