// 1、Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
// 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。
const target = { a: 1 };
const source1 = { b: 2, c: 3 };
const source2 = { c: 1 };
Object.assign(target, source1, source2);
console.log(target); // {a:1, b:2, c:3}

