namespace property2 {
  export class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
}

let value = 99;
// 使⽤defineProperty给Person原型添加age属性，并配置对应的get与set
Object.defineProperty(property2.Person.prototype, "age", {
  get() {
    return value;
  },
  set(val) {
    value = val;
  },
});
const pk2 = new property2.Person("张三", 18);
console.log(pk2.age); //18
console.log(property2.Person.prototype.age); //18
