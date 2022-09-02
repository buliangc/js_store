// Object.create和new Object的区别
// MDN  Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（__proto__）。
// 第一个参数是创建的实例的原型，第二个参数是附加的属性
// 相当于也是创建了一个实例， 让这个实例的__proto__ 隐式属性等于现有对象(也就是)
function myObjectCreate(proto, propertiesObject) {
    let obj = propertiesObject || {};
    obj.__proto__ = proto;
    return obj;
}

var obj1 = { name: "buliangc" };
var obj2 = myObjectCreate(obj1, { age: 18 })
console.log(obj2);
console.log(obj2.__proto__);
// let a = Object.create({}, { alice: { value: 18, enumerable: true }, });
// for (const key in a) {
//     console.log(key);
// }

// Object.create(proto, oject) 接收两个参数，第一个参数用于附加再第二个参数的隐式属性上面。
// let obj = object || {};
// obj.__proto__ = proto;
// return obj;