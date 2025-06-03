"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var factory1;
(function (factory1) {
    // 装饰器
    function test1(target) {
        console.log("test1");
    }
    // 装饰器工厂
    function test2() {
        console.log("test2 factory");
        return function (target) {
            console.log("test2");
        };
    }
    // 装饰器工厂
    function test3() {
        console.log("test3 factory");
        return function (target) {
            console.log("test3");
        };
    }
    // 装饰器
    function test4(target) {
        console.log("test4");
    }
    let Person = class Person {
    };
    Person = __decorate([
        test1,
        test2(),
        test3(),
        test4
    ], Person);
    factory1.Person = Person;
})(factory1 || (factory1 = {}));
console.log(factory1.Person);
/*
 控制台打印：
 test2⼯⼚
 test3⼯⼚
 test4
 test3
 test2
 test1
*/
