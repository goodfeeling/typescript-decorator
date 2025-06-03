/*
 ○ new 表示：该类型是可以⽤new操作符调⽤。
 ○ ...args 表示：构造器可以接受【任意数量】的参数。
 ○ any[] 表示：构造器可以接受【任意类型】的参数。
 ○ {} 表示：返回类型是对象(⾮null、⾮undefined的对象)。
*/


// type Constructor = new (...args: any[]) => {};

// 定义⼀个构造类型，且包含⼀个静态属性
type Constructor = {
    new (...args: any[]): {}; // 构造前面
    wife: string; // 属性
}

function test(fn:Constructor) {

}
// class Person2{}
class Person2{static wife = 'dml'}
test(Person2)

