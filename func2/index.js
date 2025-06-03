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
var func2;
(function (func2) {
    function Logger(target, propertyKey, descriptor) {
        // 保存原始方法
        const original = descriptor.value;
        // 替换原始方法
        descriptor.value = function (...args) {
            console.log(`${propertyKey}开始执行...`);
            const result = original.call(this, ...args);
            console.log(`${propertyKey}执行完毕...`);
            return result;
        };
    }
    function Validate(maxValue) {
        return function (target, propertyKey, descriptor) {
            // 保存原始方法
            const original = descriptor.value;
            // 替换原始方法
            descriptor.value = function (...args) {
                // 定义的验证逻辑
                if (args[0] > maxValue) {
                    throw new Error("非法年龄！");
                }
                // 如果都符合要求，则调用原始方法
                return original.apply(this, args);
            };
        };
    }
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        speak() {
            console.log(`"Hello,my name is ${this.name},my age is ${this.age}`);
        }
        static isAdult(age) {
            return age >= 19;
        }
    }
    __decorate([
        Logger,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "speak", null);
    __decorate([
        Validate(120),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Person, "isAdult", null);
    func2.Person = Person;
})(func2 || (func2 = {}));
const fn2 = new func2.Person("张三", 18);
fn2.speak();
console.log(func2.Person.isAdult(100));
