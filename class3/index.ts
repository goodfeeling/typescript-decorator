namespace class2 {
  export interface User {
    getTime(): Date;
    log(): void;
  }

  // 自定义类型class
  type Constructor = new (...args: any[]) => {};
  function LogTime<T extends Constructor>(target: T) {
    return class extends target {
      createdTime: Date;
      constructor(...args: any[]) {
        super(...args);
        this.createdTime = new Date(); // 记录对象创建时间
      }
      getTime() {
        return `该对象创建时间为：${this.createdTime}`;
      }
    };
  }

  @LogTime
  export class User {
    constructor(public name: string, public age: number) {}
    speak() {
      console.log(`${this.name}说：你好呀！`);
    }
  }
}


const user1 = new class2.User("张三",13)
user1.speak();
console.log(user1.getTime());
