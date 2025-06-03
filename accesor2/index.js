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
var accesor2;
(function (accesor2) {
    // 需求：对 Weather 类的 temp 属性的 set 访问器进⾏限制，设置的最低温度 -50 ，最⾼温度 50
    function RangeValidate(min, max) {
        return function (target, propertyKey, descriptor) {
            // 保存原始的setter 方法，以便在后续调用中使用
            const originalSetter = descriptor.set;
            // 重写setter 方法，加入范围验证逻辑
            descriptor.set = function (value) {
                // 检查设置的值是否在指定的最小和最大值之间
                if (value < min || value > max) {
                    // 如果值不在范围内，抛出错误
                    throw new Error(`${propertyKey}的值应该在${min}到${max}之间！`);
                }
                // 如果值范围内，且原始setter方法存在，则调用原始setter方法
                if (originalSetter) {
                    originalSetter.call(this, value);
                }
            };
        };
    }
    class Weather {
        constructor(_temp) {
            this._temp = _temp;
        }
        // 设置文档范围在-50到50之间
        set temp(value) {
            this._temp = value;
        }
        get temp() {
            return this._temp;
        }
    }
    __decorate([
        RangeValidate(-50, 50),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Weather.prototype, "temp", null);
    accesor2.Weather = Weather;
})(accesor2 || (accesor2 = {}));
const a1 = new accesor2.Weather(24);
console.log(a1);
a1.temp = -100;
console.log(a1);
