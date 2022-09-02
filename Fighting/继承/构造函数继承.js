// 原型链继承和默认属性继承
// 原型链继承 通过 将子构造函数的原型链指向父构造函数的实例
// 默认属性继承 只需要使用apply call 显式绑定
function Parents(name, age) {
    this.name = name;
    this.age = age;
    this.size = [1, 2, 3, 4, 5];
    // this.getName = function () {
    //     console.log(this.name);
    // }
}
// 自身属性 实例无法访问 只能Parents进行访问 Parents.getName
Parents.getName = function () {
    console.log("2");
}
// 原型链属性，实例可以访问
Parents.prototype.getName = function () {
    console.log(this.name);
}

function Child(type) {
    // 首先对构造函数的默认属性继承
    Parents.apply(this, ["parent", "buliangc"]);    // 相当于替换了其中的this,将内部的属性值执行了一遍
    this.type = type;
    // this.getName = function () {
    //     console.log(this.name + " " + this.age);
    // }
}
// 实现对原型链的继承 利用原型链的原理，让Child的原型链跟父级构造函数的实例挂上钩
Child.prototype = new Parents();
Child.prototype.constructor = Child;

// const p = new Parents();
// p.getName();    // 首先会从自身属性开始往上找，自身属性找不到的，会往原型链上面找，原型

const c = new Child("nice");
c.getName();    // parent buliangc 实现了默认属性的继承