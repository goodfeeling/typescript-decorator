"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//需求：定义⼀个 State 属性装饰器，来监视属性的修改
var property3;
(function (property3) {
    // 声明一个装饰器函数 State,用于捕获数据的修改
    function State(target, propertyKey) {
        // 存储属性内部的值
        let key = `__${propertyKey}`;
        // 使用Object.defineProperty 替换类的原始属性
        // 重新定义属性，使其使用自定义的getter和setter
        Object.defineProperty(target, propertyKey, {
            get() {
                return this[key];
            },
            set(newVal) {
                console.log(`${propertyKey}的最新值为：${newVal}`);
                this[key] = newVal;
            },
            enumerable: true,
            configurable: true,
        });
    }
    class Person {
        constructor(name, age) {
            this.school = 'xx';
            this.name = name;
            this.age = age;
        }
    }
    __decorate([
        State,
        __metadata("design:type", Number)
    ], Person.prototype, "age", void 0);
    property3.Person = Person;
})(property3 || (property3 = {}));
const pk3 = new property3.Person("张三", 18);
const pk4 = new property3.Person("李四", 30);
pk3.age = 21;
pk4.age = 24;
console.log("-------");
console.log(pk3);
console.log(pk4);
