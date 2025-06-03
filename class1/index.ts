namespace class1 {
  function Demo(target: Function) {
    return class {
      test() {
        console.log(200);
        console.log(300);
      }
    };
  }

  @Demo
  export class Person1 {
    test() {
      console.log(100);
    }
  }
}

console.log(class1.Person1);
