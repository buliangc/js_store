// valueOf 把对象转化成基本类型，转化不了就返回原对象
// Boolean、Number、String及其对应的包装类型返回对应的原值


// const obj = new Boolean(true);
// console.log(obj.valueOf());//true
// console.log(typeof obj.valueOf());//boolean
// //如果是包装类型的基本类型，则返回原基本类型值
// const a = true;
// console.log(a.valueOf());//true
// console.log(typeof a.valueOf());//boolean
let a = {};
let value = 0;

a.toString = function () {
    console.log("toString");
    value += 1;
    return value;
}
a.valueOf = function () {
    console.log("valueOf");
    value += 1;
    return value;
}
if (a == 1 && a == 2 && a == 3) {
    console.log("Hi Libai!");
}