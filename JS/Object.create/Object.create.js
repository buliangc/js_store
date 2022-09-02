// function myCreate(target) {
//     function Func() { };
//     Func.prototype = target;
//     return new Func();
// }
// function object(o) {
//     function F() { } // 先创建一个临时性的构造函数
//     F.prototype = o // 然后将传入的对象作为这个构造函数的原型
//     return new F() // 最后返回了这个临时类型的一个新实例
// }
// var obj1 = { name: "buliangc" };
// var obj2 = new Object(obj1)
// var createObj = myCreate(obj1);
// console.log(createObj.__proto__);
// console.log(obj2.name);

function myCreate(proto, propertiesObject) {
    const obj = propertiesObject || {};
    obj.__proto__ = proto;
    return obj;
}
var obj1 = { name: "buliangc" };
var obj2 = myCreate(obj1, { age: 18 })
console.log(obj2);