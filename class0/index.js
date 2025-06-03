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
var class0;
(function (class0) {
    function CustomString(target) {
        // 向装饰类的原始上添加自定义的toString方法
        target.prototype.toString = function () {
            return JSON.stringify(this);
        };
        // 封闭其原型对象，禁止随意操作其原型对象
        Object.seal(target.prototype);
    }
    // 使用CustomString装饰器
    let Person = class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        speak() {
            console.log("你好呀!");
        }
    };
    Person = __decorate([
        CustomString,
        __metadata("design:paramtypes", [String, Number])
    ], Person);
    class0.Person = Person;
})(class0 || (class0 = {}));
let p1 = new class0.Person("张三", 18);
console.log(p1.toString());
// Person.prototype.a = 100 // 报错
// console.log(p1.a);
