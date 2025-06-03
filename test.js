var obj = {
    prop: function() {},
    foo:'bar'
}

obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop

console.log(obj);

var o = Object.seal(obj);
console.log(o === obj);
console.log(Object.isSealed(obj));

obj.foo = "123"

// Object.defineProperty(obj,'foo',{
    // get: function() {return 'g'}
// })

obj.qq = "ttt"
delete obj.foo

console.log(obj);

// function fail() {
//     'use strict'
//     delete obj.foo
//     obj.abc = 'aa'
// }

// fail()