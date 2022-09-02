
Array.prototype.myForEach = function (fn, thisArg) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        fn.call(thisArg, arr[i]);
    }
}
let obj = {
    num: 10
}
let arr = [1, 2, 3, 4, 5, 6];
arr.myForEach(function (value, index, arr) {
    console.log(value + this.num);
}, obj);
console.log(arr);