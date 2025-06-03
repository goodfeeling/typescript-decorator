namespace func1 {
    /*
        参数说明：
        ○ target: 对于静态⽅法来说值是类，对于实例⽅法来说值是原型对象。
        ○ propertyKey:⽅法的名称。
        ○ descriptor: ⽅法的描述对象，其中value属性是被装饰的⽅法。
        */
        function Demo(target: object,propertyKey:string,descriptor: PropertyDescriptor) {
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        }
        export class Person {
            constructor(public name:string,public age: number) {}
            // Demo装饰实例方法
            @Demo speak() {
                console.log(`"Hello,my name is ${this.name},my age is ${this.age}`);
            }
            // 装饰静态方法
            @Demo static isAdult(age:number) {
                return age >= 18;
            }
        }
}

const fn1 = new func1.Person("张三",18);
fn1.speak();