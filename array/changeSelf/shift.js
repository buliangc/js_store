Array.prototype.myShift = function () {
    var arr = this;
    if (arr.length === 0) return undefined;
    var firstRes = arr[0];
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    };
    this.length = this.length - 1;
    return firstRes;
}

let arr = ['Jerry', 'Tom', 'f', 'g', 'j'];
let res = arr.myShift();
console.log(arr, res);