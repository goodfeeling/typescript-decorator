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
var func1;
(function (func1) {
    /*
        参数说明：
        ○ target: 对于静态⽅法来说值是类，对于实例⽅法来说值是原型对象。
        ○ propertyKey:⽅法的名称。
        ○ descriptor: ⽅法的描述对象，其中value属性是被装饰的⽅法。
        */
    function Demo(target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        // Demo装饰实例方法
        speak() {
            console.log(`"Hello,my name is ${this.name},my age is ${this.age}`);
        }
        // 装饰静态方法
        static isAdult(age) {
            return age >= 18;
        }
    }
    __decorate([
        Demo,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "speak", null);
    __decorate([
        Demo,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Person, "isAdult", null);
    func1.Person = Person;
})(func1 || (func1 = {}));
const fn1 = new func1.Person("张三", 18);
fn1.speak();
