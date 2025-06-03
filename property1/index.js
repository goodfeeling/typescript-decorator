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
var property1;
(function (property1) {
    /*
   参数说明：
   ○ target: 对于静态属性来说值是类，对于实例属性来说值是类的原型对象。
   ○ propertyKey: 属性名。
  */
    function Demo(target, propertyKey) {
        console.log(target, propertyKey);
    }
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    __decorate([
        Demo,
        __metadata("design:type", String)
    ], Person.prototype, "name", void 0);
    __decorate([
        Demo,
        __metadata("design:type", Number)
    ], Person.prototype, "age", void 0);
    __decorate([
        Demo,
        __metadata("design:type", String)
    ], Person, "school", void 0);
    property1.Person = Person;
})(property1 || (property1 = {}));
const pk1 = new property1.Person("张三", 18);
