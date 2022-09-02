const obj = {
    name: "buliangc"
}

function test(age, sex) {
    console.log(this.name + ":" + age + ":" + sex);
}
Function.prototype._call = function (thisArg, ...args) {
    const obj = thisArg || window;
    obj.fn = this;
    let res;
    if (args) {
        res = obj.fn(...args)
    } else {
        res = obj.fn()
    };
    delete obj.fn;
    return res;
}
// Function.prototype._bind = function (thisArg, ...args) {
//     const self = this;
//     return function () {
//         return self.apply(thisArg, args);
//     }
// }

test._call(obj, 18, "男")