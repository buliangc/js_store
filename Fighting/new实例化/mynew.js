// // 首先自定义new 目的是为了实例化构造函数
// // 构造函数
// // function Person(name) {
// //     this.name = name;   // 
// // }



// function Person(firtName, lastName) {
//     this.firtName = firtName;
//     this.lastName = lastName;

//     return {
//         fullName: `${this.firtName} ${this.lastName}`
//     };
// }
// // 原型属性  最好不要使用箭头函数 因为无法绑定this
// Person.prototype.say = function () {
//     console.log(this.name);
// }

// // const someone = new Person("不良菜", "Cc")
// // console.log(someone)
// // someone.say();
// function myNew(target, ...args) {
//     let obj = new Object();
//     obj.__proto__ = target.prototype;  // 继承原型链属性
//     let res = target.apply(obj, args);           // 继承实例属性
//     return typeof (res) == "object" ? res : obj;
//     // target.apply(obj, args);           // 继承实例属性
//     // return obj;
// }
// const someone = myNew(Person, "buliangc", "Cc");
// console.log(someone)
// someone.say();

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function () {
    console.log(this.name)
    console.log(this.age)
}

function myNew(fn, ...args) {
    let obj = Object.create({});
    obj.__proto__ = fn.prototype;
    let res = fn.apply(obj, args);
    return typeof (res) == 'object' ? res : obj;
}

const p = myNew(Person, "buliangc", 18);
p.say();