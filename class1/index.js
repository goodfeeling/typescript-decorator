"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var class1;
(function (class1) {
    function Demo(target) {
        return class {
            test() {
                console.log(200);
                console.log(300);
            }
        };
    }
    let Person1 = class Person1 {
        test() {
            console.log(100);
        }
    };
    Person1 = __decorate([
        Demo
    ], Person1);
    class1.Person1 = Person1;
})(class1 || (class1 = {}));
console.log(class1.Person1);
