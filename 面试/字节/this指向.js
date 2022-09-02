// https://blog.csdn.net/weixin_43334673/article/details/109624277
var A = function () { };
A.prototype.n = 1;
var b = new A();
A.prototype = { n: 2, m: 3 };
var c = new A();

console.log(b.n);   //1
console.log(b.m);   //undefined
console.log(c.n);   //2
console.log(c.m);   //3


function Foo() {
    Object.prototype.a = function () {
        console.log('A')
    }
}
Function.prototype.b = function () {
    console.log('B')
}

var foo = new Foo()
foo.a();
// foo.b();
Foo.a();
Foo.b();
