// apply和call就是传参不一样,但是两个都是会在调用的时候同时执行调用的函数,但是bind则会返回一个绑定了this的函数.

const obj = {
    name: "buliangc"
}

function test(age, sex) {
    console.log(this.name + ":" + age + ":" + sex);
}

Function.prototype.myApply = function (thisArg, arg) {
    const obj = thisArg || window;
    obj.fn = this;
    let result;
    if (arg) {
        result = obj.fn(...arg);
    } else {
        result = obj.fn();
    }
    delete obj.fn;
    return result;
}

// test.myApply(obj, [18, "男"]);


Function.prototype.myCall = function (thisArg, ...arg) {
    const obj = thisArg || window;
    obj.fn = this;
    let result;
    if (arg) {
        result = obj.fn(...arg);
    } else {
        result = obj.fn();
    }
    delete obj.fn;
    return result;
}

// test.myCall(obj, 18, "男");

Function.prototype.myBind = function (thisArg, ...arg) {
    const fn = this;
    return function () {
        return fn.apply(thisArg, arg);
    }
}
let res = test.myBind(obj, 18, "男");
res();

