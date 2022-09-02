let arr = [1, [2, 2], [3, 3, 3], [4, 4, 4, 4]];
let arr1 = [1, [5, [6, 4], [8, 7, 2]], [4, [1, [2, [3, [5, [4], 5], 6], 8], 7], 1]]
let arr2 = [1, [1, 2], ['1', 2]];

// 1. flat函数
// function flat(arr) {
//     return arr.flat(Infinity);
// }
// console.log(flat(arr2));

// 2. 递归
// let res = [];
// function flat1(arr) {
//     arr.forEach(value => {
//         if (value instanceof Array) {
//             flat1(value);
//         } else {
//             res.push(value);
//         }
//     });
//     return res;
// }
// console.log(flat1(arr2));

// 3.reduce filter
// function flat2(arr) {
//     return arr.reduce((pre, cur) => {
//         if (Array.isArray(cur)) {
//             console.log(pre);
//             return pre.concat(flat2(cur))
//         } else {
//             return pre.concat(cur)
//         }
//     }, [])
// }
// console.log(flat2(arr));

// 4. 指定深度扁平数组
// let res = [];
// function flat3(arr, deep) {
//     arr.forEach(value => {
//         if (Array.isArray(value) && deep > 0) {
//             flat3(value, deep - 1);
//         } else {
//             res.push(value);
//         }
//     });
//     return res;
// }

function flattenByDeep(array, deep = 1) {
    return array.reduce((pre, cur) => {
        return Array.isArray(cur) && deep > 1 ? pre.concat(flattenByDeep(cur, deep--)) : pre.concat(cur);
    }, []);
}
console.log(flattenByDeep(arr1, 2));
