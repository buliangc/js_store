Array.prototype.myMap = function (fn, thisArg) {
    let arr = this;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn.call(thisArg, arr[i]))
    };
    return res;
}
Array.prototype.myMap1 = function (fn, thisArg) {
    let arr = this;
    console.log(arr);
    return arr.reduce((preVal, nextVal) => {
        preVal.push(fn.call(thisArg, nextVal));
        return preVal
    }, []);
}
let obj = {
    num: 10
}
let arr = [1, 2, 3, 4, 5, 6];
let res = arr.myMap(function (value) {
    return value * 2 + this.num;
}, obj);
let res1 = arr.myMap1(function (value) {
    return value * 2 + this.num;
}, obj);
console.log(arr, res, res1);