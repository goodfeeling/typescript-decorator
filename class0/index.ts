namespace class0 {
  export interface Person {
    a: any;
  }
  function CustomString(target: Function) {
    // 向装饰类的原始上添加自定义的toString方法
    target.prototype.toString = function () {
      return JSON.stringify(this);
    };

    // 封闭其原型对象，禁止随意操作其原型对象
    Object.seal(target.prototype);
  }

  // 使用CustomString装饰器
  @CustomString
  export class Person {
    constructor(public name: string, public age: number) {}
    speak() {
      console.log("你好呀!");
    }
  }
}

let p1 = new class0.Person("张三", 18);
console.log(p1.toString());

// Person.prototype.a = 100 // 报错
// console.log(p1.a);
