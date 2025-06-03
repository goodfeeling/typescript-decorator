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
var accesor1;
(function (accesor1) {
    /*
 参数说明：
 ○ target:
 1. 对于实例访问器来说值是【所属类的原型对象】。
 2. 对于静态访问器来说值是【所属类】。
 ○ propertyKey:访问器的名称。
 ○ descriptor: 描述对象。
*/
    function Demo(target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    }
    class Person {
        get address() {
            return 'guangdong';
        }
        static get country() {
            return 'china';
        }
    }
    __decorate([
        Demo,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "address", null);
    __decorate([
        Demo,
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Person, "country", null);
    accesor1.Person = Person;
})(accesor1 || (accesor1 = {}));
