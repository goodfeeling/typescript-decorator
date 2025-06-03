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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var param1;
(function (param1) {
    /*
   参数说明：
   ○ target:
   1.如果修饰的是【实例⽅法】的参数，target 是类的【原型对象】。
   2.如果修饰的是【静态⽅法】的参数，target 是【类】。
   ○ propertyKey：参数所在的⽅法的名称。
   ○ parameterIndex: 参数在函数参数列表中的索引，从 0 开始。
  */
    function Demo(target, propertyKey, parameterIndex) {
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    }
    // 类定义
    class Person {
        constructor(name) {
            this.name = name;
        }
        speak(message1, message2) {
            console.log(`${this.name}想对你说：${message1},${message2}`);
        }
    }
    __decorate([
        __param(0, Demo),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "speak", null);
    param1.Person = Person;
})(param1 || (param1 = {}));
