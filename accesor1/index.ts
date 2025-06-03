namespace accesor1 {
    /*
 参数说明：
 ○ target:
 1. 对于实例访问器来说值是【所属类的原型对象】。
 2. 对于静态访问器来说值是【所属类】。
 ○ propertyKey:访问器的名称。
 ○ descriptor: 描述对象。
*/

    function Demo(target: object, propertyKey: string,descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        
    }
    export class Person {
        @Demo 
        get address() {
            return 'guangdong';
        }
        @Demo
        static get country() {
            return 'china'
        }
    }
}