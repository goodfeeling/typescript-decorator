//需求：定义⼀个 State 属性装饰器，来监视属性的修改
namespace property3 {
    // 声明一个装饰器函数 State,用于捕获数据的修改
    function State(target: object,propertyKey: string) {
        // 存储属性内部的值
        let key = `__${propertyKey}`;
        // 使用Object.defineProperty 替换类的原始属性
        // 重新定义属性，使其使用自定义的getter和setter
        Object.defineProperty(target,propertyKey,{
            get() {
                return this[key]
            },
            set(newVal: string) {
                console.log(`${propertyKey}的最新值为：${newVal}`);
                this[key] = newVal;
                
            },
            enumerable: true,
            configurable: true,
        })
    }


    export class Person {
        name: string;
        // 使用State装饰器
        @State age:number
        school = 'xx'
        constructor(name:string,age:number) {
            this.name = name;
            this.age = age
        }
    }
}

const pk3 = new property3.Person("张三",18);
const pk4 = new property3.Person("李四",30);
pk3.age = 21;
pk4.age = 24;
console.log("-------");
console.log(pk3);
console.log(pk4);


