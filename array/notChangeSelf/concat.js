Array.prototype.myConcat = function () {
    let arr = this;
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            arr[this.length] = arguments[i][j];
        }
    }
    return arr;
}

let arr = ['Jerry', 'Tom'];
let arr1 = ['Kitty', 'Monkey', 'Dog', 'Cat'];
let arr2 = ['A', 'B', 'N', 'M'];
let res = arr.myConcat(arr1, arr2);
console.log(arr);