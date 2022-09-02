// function Parent(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let child = new Parent('buliangc',18);

// console.log(child.name);

// 手写new 
// function Parent(name,age) {
//     let child = {}; // 创建一个临时对象
//     child.__proto__ = Parent.prototype;
//     child = Parent.call(child,name,age);
//     return child;
// }

// const child = Parent('buliangc', 18);
// console.log(child.name);
// function create() {
//     let child = {}; // 创建临时对象
//     child.__proto__ = 

// }

// function Person() {
//     this.name = 'Buliangc';
// }

// let p = new Person();
// console.log(p);
// console.log(p.name);

Function.prototype.myApply = function (thisObj, args) {
    const obj = thisObj || window;
    obj.fn = this;
    let result;
    if (args) {
        result = obj.fn(...args);
    } else {
        result = obj.fn();
    }
    delete obj.fn;
    return result;
}

function myNew(constructor, ...args) {
    const instance = {};
    instance.__proto__ = constructor.prototype;
    const res = constructor.myApply(instance, args)
    return typeof (res) == "object" ? res : instance;
}

function Say(name, age) {
    this.name = name;
    this.age = age;
}
Say.prototype = function g() {
    console.log("nice");
}

let p = myNew(Say, "buliangc", 18);
console.log(p);

let p1 = new Say("buliangc", 18);
console.log(p1);
