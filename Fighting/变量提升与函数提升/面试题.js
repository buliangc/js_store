// fn();
// function fn() { console.log(1); }
// fn();
// function fn() { console.log(2); }
// fn();
// var fn = function () { console.log(3); }
// fn();
// function fn() { console.log(4); }
// fn();
// function fn() { console.log(5); }
// fn();

// var foo = 1;
// function bar() {
//     if (!foo) {
//         var foo = 10;
//     }
//     console.log(foo);
// }
// bar();

// 脑残题目
var a = 0;
if (true) {
    a = 1;
    function a() { };
    a = 21;
    console.log(a)
}
console.log(a);

// 函数提升和变量提升
function fn(a) {
    function a() { }
    function d() { }
    var a;
    var b;
    console.log(a)
    a = 123;
    console.log(a)
    console.log(a)
    console.log(b);
    b = function () { }
    console.log(b);
    console.log(d);
}
fn(1)
