Array.prototype.myFill = function (value, start = 0, end = this.length) {
    let arr = this;
    for (let i = start; i < end; i++) {
        arr[i] = value;
    }
    return arr;
}

let arr = [1, 2, 3, 4];

arr.myFill(0, 2, 4);
console.log(arr);
arr.myFill(5, 1);
console.log(arr);
arr.myFill(6);
console.log(arr);
