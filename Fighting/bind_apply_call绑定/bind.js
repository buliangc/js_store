// 实现bind bind的区别就是并不执行函数，只进行绑定
// this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
// var module = {
//     x: 81,
//     getX: function () { return this.x; }
// };

// module.getX(); // 81

// var retrieveX = module.getX;
// // retrieveX();
// // 返回 9 - 因为函数是在全局作用域中调用的

// // 创建一个新函数，把 'this' 绑定到 module 对象
// // 新手可能会将全局变量 x 与 module 的属性 x 混淆
// // var boundGetX = retrieveX.bind(module);
// // boundGetX(); // 81

// let obj = {
//     name: "buliangc",
//     age: 18
// }
// // person.apply(obj);
// // 传入单个参数
// Function.prototype.myCall = function (thisArg, ...args) {
//     let obj = thisArg ? thisArg : window;
//     console.log(obj)
//     console.log(this)
//     obj.fn = this;
//     let res;
//     if (args) {
//         res = obj.fn(...args);
//     } else {
//         res = obj.fn();
//     }
//     // 删除我们绑定的的Symbol(func)属性，以免污染new_this的属性；
//     delete obj.fn;
//     return res;
// }
// // apply 传入数组
// Function.prototype.myApply = function (thisArg, args) {
//     let obj = thisArg ? thisArg : window;
//     obj.fn = this;
//     let res;
//     if (args) {
//         res = obj.fn(...args);
//     } else {
//         res = obj.fn();
//     }
//     // 删除我们绑定的的Symbol(func)属性，以免污染new_this的属性；
//     delete obj.fn;
//     return res;
// }
// console.log(retrieveX.myCall(module));


// 实现apply
Function.prototype.myApply = function (thisArg, args) {
    const obj = thisArg ? thisArg : window;
    obj.fn = this;
    let res;
    if (args) {
        res = obj.fn(...args)
    } else {
        res = obj.fn();
    }
    delete obj.fn;
    return res;
}
// 实现bind 
Function.prototype.myBind = function (thisArg, ...args) {
    const self = this;
    return function () {
        self.myApply(thisArg, args);
    }
}

function person(age) {
    this.age = age;
    console.log(this.name + " " + this.age)
}

let obj = {
    name: "buliangc"
}

// person.myApply(obj, [18])
let p = person.myBind(obj, 18)
p();