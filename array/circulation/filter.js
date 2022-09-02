Array.prototype.myFilter = function (fn) {
    let arr = this;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = arr.myFilter((value, index, arr) => {
    return value > 4;
});
console.log(arr, res);