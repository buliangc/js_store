// Array.prototype.myMap = function(fn, thisArg) {
//     return arr.reduce((preVal, nextVal,nextIndex,arr) => {
//         preVal.push(fn.call(thisArg,nextVal,nextIndex,arr));
//         return preVal;
//     }, [])
// }
Array.prototype.myMap = function (fn, thisArg) {
    let arr = this;
    console.log(arr);
    return arr.reduce((preVal, nextVal) => {
        console.log('preVal', preVal);
        preVal.push(fn.call(thisArg, nextVal));
        return preVal;
    }, []);
}
let arr = [1, 2, 3, 4];
let res = arr.myMap(function (value) {
    return value * 2 + this.num;
}, { num: 10 })
console.log(res);
