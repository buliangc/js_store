Array.prototype.myIndexOf = function (num) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6];

let res = arr.myIndexOf(2);
console.log(arr, res);