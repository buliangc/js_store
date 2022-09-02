
// https://www.cnblogs.com/liuhe688/p/5891273.html
// 函数是JavaScript的一等公民  预编译会将函数提升到当前作用域的最顶端 接着将变量提升
// function a() {}
// var a = 0;

// function hoistFunction() {
//     function foo() {
//         console.log(2);
//     }
//     var foo;
//     foo(); // 2

//     foo = function () {
//         console.log(1);
//     };

//     foo(); // 1
//     foo(); // 1
// }

// hoistFunction();

// 函数 

setTimeout(() => {
    console.log("hi");
}, 2000);
setTimeout(() => {
    console.log("hi");
}, 2000);
setTimeout(() => {
    console.log("hi");
}, 2000);
setTimeout(() => {
    console.log("hi");
}, 2000);