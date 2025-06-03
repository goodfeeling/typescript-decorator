namespace func2 {
    function Logger(target:object,propertyKey:string,descriptor: PropertyDescriptor) {
        // 保存原始方法
        const original = descriptor.value;
        // 替换原始方法
        descriptor.value = function(...args: any[]) {
            console.log(`${propertyKey}开始执行...`);
            const result = original.call(this,...args);
             console.log(`${propertyKey}执行完毕...`);
             return result;
        }
    }
    
    function Validate(maxValue:number) {
        return function (target: object,propertyKey: string,descriptor: PropertyDescriptor) {
            // 保存原始方法
            const original = descriptor.value;
            // 替换原始方法
            descriptor.value = function (...args: any[]) {
                // 定义的验证逻辑
                if (args[0] > maxValue) {
                    throw new Error("非法年龄！");
                }
                // 如果都符合要求，则调用原始方法
                return original.apply(this,args);
            }
        }
    }
    export class Person {
        constructor(public name:string,public age:number) {
            
        }
        @Logger speak() {
            console.log(`"Hello,my name is ${this.name},my age is ${this.age}`);
        }
        @Validate(120)
        static isAdult(age:number) {
            return age >= 19;
        }
    }
}

const fn2 = new func2.Person("张三",18);
fn2.speak();
console.log(func2.Person.isAdult(100));
