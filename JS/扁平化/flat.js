// 数组扁平化
// 1. 数组扁平化方法 Array.prototype.flat()
// 2. 
const arr = [1, [2, 3], [4, [5, [6]], 7]];
// console.log(arr.flat(Infinity));
// function typeCheck(target) {
//     return Object.prototype.toString.call(target).slice(8, -1);
// }    
// let res = [];

// function myFlat(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // if(arr[i] instanceof Array){
//         if(Array.isArray(arr[i])){
//             myFlat(arr[i]);
//         }else{
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

// console.log(myFlat(arr));

// function myFlat1(arr, deep = 1) {
//     return arr.reduce((pre, cur) => {
//         if (Array.isArray(cur) && deep > 1) {
//             return pre.concat(myFlat1(cur, deep - 1));
//         } else {
//             return pre.concat(cur);
//         }
//     }, []);
// }
// console.log(myFlat1(arr, 2));

// const arr = [1, [2, 3], [4, [5, [6]], 7]];

// function flat(arr, deep = 1) {
//     let res = arr.reduce((preValue, curValue) => {
//         console.log(preValue, curValue);
//         if (typeof (curValue) == 'object') {
//             let mid = flat(curValue);
//             console.log(mid);
//             return preValue.concat(mid);
//         } else {
//             // console.log(preValue, curValue);
//             return preValue.concat(curValue);
//         }
//     }, [])
//     return res;
// }
// console.log(flat(arr, 2));

// 扁平化
function myFlat2(arr, deep = 1) {
    return arr.reduce((pre, cur) => {
        // 如果仍是数组
        if (Array.isArray(cur) && deep > 1) {
            return pre.concat(myFlat2(cur, deep - 1));
        } else {
            return pre.concat(cur);
        }
    }, [])
}
console.log(myFlat2(arr, 1));
