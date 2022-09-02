// 实现new 构造函数
function myNew(target, ...args) {
    const obj = Object.create({});
    obj.__proto__ = target.prototype;   // 继承原型链属性
    let res = target.apply(obj, args);  // 继承实例属性
    return typeof(res) == "object" ? res : obj;
}