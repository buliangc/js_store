Array.prototype.myUnshift = function () {
    var arrLength = this.length;
    var arr = this;
    for (let i = arrLength + arguments.length - 1; i >= 0; i--) {
        if (i > arguments.length - 1) {
            arr[i] = arr[i - arguments.length];
        } else {
            arr[i] = arguments[i];
        }
    }
    return arr.length
}

let arr = ['Jerry', 'Tom'];
arr.myUnshift('buliangc', 'double');
console.log(arr);