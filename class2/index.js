"use strict";
/*
 ○ new 表示：该类型是可以⽤new操作符调⽤。
 ○ ...args 表示：构造器可以接受【任意数量】的参数。
 ○ any[] 表示：构造器可以接受【任意类型】的参数。
 ○ {} 表示：返回类型是对象(⾮null、⾮undefined的对象)。
*/
function test(fn) {
}
// class Person2{}
class Person2 {
}
Person2.wife = 'dml';
test(Person2);
