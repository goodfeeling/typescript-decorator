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
var factory2;
(function (factory2) {
    // 使用装饰器重写toString方法+封闭原型对象
    function customToString(target) {
        // 向被装饰类的原型上添加自定义的toString方法
        target.prototype.toString = function () {
            return JSON.stringify(this);
        };
        // 封闭其原型对象，禁止随意操作其原型对象
        Object.seal(target.prototype);
    }
    // 创建一个装饰器，为类添加功能和创建时间
    function LogTime(target) {
        return class extends target {
            constructor(...args) {
                super(...args);
                this.createdTime = new Date();
            }
            getTime() {
                return `该对象创建时间为：${this.createdTime}`;
            }
        };
    }
    // 定义一个装饰器工厂 LogInfo，它接受一个参数n,返回一个类装饰器
    function LogInfo(n) {
        // 装饰器函数，target是被装饰的类
        return function (target) {
            target.prototype.introduce = function () {
                for (let i = 0; i < n; i++) {
                    console.log(`我的名字：${this.name},我的年龄：${this.age}`);
                }
            };
        };
    }
    let Person = class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            console.log("你好呀！");
        }
        speak() {
            console.log('你好呀！');
        }
    };
    Person = __decorate([
        customToString,
        LogInfo(3),
        LogTime,
        __metadata("design:paramtypes", [String, Number])
    ], Person);
    factory2.Person = Person;
})(factory2 || (factory2 = {}));
const f1 = new factory2.Person("张三", 18);
console.log(f1.toString());
f1.introduce();
console.log(f1.getTime());
