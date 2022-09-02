Array.prototype.myLastIndexOf = function (num) {
    let arr = this;
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] == num) {
            return i
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 2, 6];

let res = arr.myLastIndexOf(7);
console.log(arr, res);
