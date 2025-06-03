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
var class2;
(function (class2) {
    function LogTime(target) {
        return class extends target {
            constructor(...args) {
                super(...args);
                this.createdTime = new Date(); // 记录对象创建时间
            }
            getTime() {
                return `该对象创建时间为：${this.createdTime}`;
            }
        };
    }
    let User = class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        speak() {
            console.log(`${this.name}说：你好呀！`);
        }
    };
    User = __decorate([
        LogTime,
        __metadata("design:paramtypes", [String, Number])
    ], User);
    class2.User = User;
})(class2 || (class2 = {}));
const user1 = new class2.User("张三", 13);
user1.speak();
console.log(user1.getTime());
