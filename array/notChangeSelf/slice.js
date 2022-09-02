Array.prototype.mySlice = function (start, end = this.length) {
    let arr = this;
    let res = [];
    if (start < 0) {
        for (let i = start + end; i < end; i++) {
            res.push(arr[i])
        }
    } else {
        for (let i = start; i < end; i++) {
            res.push(arr[i])
        }
    }

    return res;
}

let arr = [1, 2, 3, 4, 5, 6];

let res = arr.mySlice(-4);
console.log(arr, res);