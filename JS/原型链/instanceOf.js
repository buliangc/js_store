// 实现一个instanceOf 通过原型链判断数据类型
// function myInstanceOf(left, right) {
//     let a = left.__proto__;
//     let b = right.prototype;
//     while (true) {
//         if (a == null) {
//             return false;
//         }
//         if (a == b) {
//             return true;
//         }
//         a = a.prototype;
//     }
// }

// console.log(myInstanceOf("str", String));

// function Foo() {
//     getName = function () {      // 这样只相当于在构造函数内部定义了一个全局变量 getName 并赋值为函数
//         console.log("1");        // this.getName相当于添加了实例属性
//     }
//     return this;
// }
// Foo.getName = function () {     // 这个相当于在函数上添加了一个方法，调用方式Foo.getName()
//     console.log("2");
// }
// Foo.prototype.getName = function () {       // 在Foo构造函数上添加的原型链属性，实例对象可访问
//     console.log("3");
// }

// var getName = function () {
//     console.log("4");
// }

// function getName() {    // 函数提升到顶端
//     console.log("5");
// }

// Foo.getName();  // Foo函数上绑定的方法 2
// getName();      // 4
// Foo().getName();    // 返回出来window 上面挂载getName 1
// getName();      // 1

// new Foo.getName();  // "2"
// new Foo().getName();    // "3"实例上的方法
// new new Foo().getName();    // "3"

// function getName() {    // 函数提升到顶端
//     console.log("5");
// }
// var getName;
// function Foo() {
//     getName = function () {      // 这样只相当于在构造函数内部定义了一个全局变量 getName 并赋值为函数
//         console.log("1");        // this.getName相当于添加了实例属性
//     }
// }
// Foo.getName = function () {     // 这个相当于在函数上添加了一个方法，调用方式Foo.getName()
//     console.log("2");
// }
// Foo.prototype.getName = function () {       // 在Foo构造函数上添加的原型链属性，实例对象可访问
//     console.log("3");
// }
// getName = function () {
//     console.log("4");
// }
function Foo() {
    Foo.a = function () {
        console.log(1);
    }
    this.a = function () {
        console.log(2)
    }
}

Foo.prototype.a = function () {
    console.log(3);
}

Foo.a = function () {
    console.log(4);
}

Foo.a();

