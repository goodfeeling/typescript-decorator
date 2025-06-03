namespace factory1 {
  // 装饰器
  function test1(target: Function) {
    console.log("test1");
  }

  // 装饰器工厂
  function test2() {
    console.log("test2 factory");
    return function (target: Function) {
      console.log("test2");
    };
  }

  // 装饰器工厂
  function test3() {
    console.log("test3 factory");
    return function (target: Function) {
      console.log("test3");
    };
  }

  // 装饰器
  function test4(target: Function) {
    console.log("test4");
  }

  @test1
  @test2()
  @test3()
  @test4
  export class Person {}
}

console.log(factory1.Person);

/*
 控制台打印：
 test2⼯⼚
 test3⼯⼚
 test4
 test3
 test2
 test1
*/
