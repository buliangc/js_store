Array.prototype.myJoin = function (separator = ',') {
    let arr = this;
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i != arr.length - 1) {
            str += separator;
        }
    }
    return str;
}

let arr = [1, 2, 3, 4, 5, 2, 6];
let arr1 = [1, 2, 'a', '1a']
let res = arr1.myJoin();
console.log(arr, res);
