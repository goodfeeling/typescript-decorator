namespace accesor2 {
    // 需求：对 Weather 类的 temp 属性的 set 访问器进⾏限制，设置的最低温度 -50 ，最⾼温度 50
    function RangeValidate(min: number,max: number) {
        return function (target: object,propertyKey: string,descriptor: PropertyDescriptor) {
            // 保存原始的setter 方法，以便在后续调用中使用
            const originalSetter = descriptor.set;

            // 重写setter 方法，加入范围验证逻辑
            descriptor.set = function (value:number) {
                // 检查设置的值是否在指定的最小和最大值之间
                if (value < min || value > max) {
                    // 如果值不在范围内，抛出错误
                    throw new Error(`${propertyKey}的值应该在${min}到${max}之间！`);
                }
                // 如果值范围内，且原始setter方法存在，则调用原始setter方法
                if (originalSetter) {
                    originalSetter.call(this,value)
                }
            }
        }
    }
    export class Weather {
        private _temp: number;
        constructor(_temp: number) {
            this._temp = _temp;
        }
        // 设置文档范围在-50到50之间
        @RangeValidate(-50,50)
        set temp(value) {
            this._temp = value;
        }
        get temp() {
            return this._temp;
        }
    }
}

const a1 = new accesor2.Weather(24);
console.log(a1);
a1.temp = -100;
console.log(a1);

