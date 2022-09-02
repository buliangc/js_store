Array.prototype.myPop = function () {
    var arr = this;
    if (arr.length === 0) return undefined;
    var result = arr[this.length - 1];
    this.length = this.length - 1;
    return result;
}

let arr = ['Jerry', 'Tom'];
let res = arr.myPop();
console.log(arr, res);