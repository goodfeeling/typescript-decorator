"use strict";
var param2;
(function (param2) {
    // 需求：定义⽅法装饰器 Validate ，同时搭配参数装饰器 NotNumber ，来对 speak ⽅法的参数类型进⾏限制。
    function NotNumber(target, propertyKey, parameterIndex) {
        // 初始化或获取当前方法的参数索引列表
        let notNumberArr = target[`__notNumber_${propertyKey}`] || [];
        // 将当前参数索引添加到列表中
        notNumberArr.push(parameterIndex);
        // 将列表存储回目标对象
        target[`__notNumber_${propertyKey}`] = notNumberArr;
    }
    // 方法装饰器定义
    function Validate(target, propertyKey, descriptor) {
        const method = descriptor.value;
        descriptor.value = function (...args) {
            // 获取被标记为不能为空的参数索引列表
            const notNumberArr = target[`__notNumber_${propertyKey}`] || [];
            // 检查参数是否为null 或 undefined
            for (const index of notNumberArr) {
                if (typeof args[index] === 'number') {
                    throw new Error(`方法${propertyKey}中索引为 ${index} 的参数不能是数字`);
                }
            }
            // 调用原始方法
            return method.apply(this, args);
        };
        return descriptor;
    }
    // 类定义
    class Student {
        constructor(name) {
            this.name = name;
        }
        speak(message1, message2) {
            console.log(`${this.name}想对说:${message1},${message2}`);
        }
    }
})(param2 || (param2 = {}));
