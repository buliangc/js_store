let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let arr1 = [1, 5, 6, 4, 8, 7, 2, 4, 1, 2, 3, 5, 4, 5, 6, 8, 7, 1]
let arr2 = [1, 1, 2, '1', 2];

// 1. Set
// console.log([...new Set(arr2)]);

// 2. for循环

// 3. indexOf
function filter2(arr) {
    let res = [];
    arr.forEach(value => {
        if (res.indexOf(value) == -1) {
            res.push(value);
        }
    })
    console.log(res);
}
// filter2(arr2);

// 4. filter + indexOf filter返回满足条件的所有值，集合为数组
function filter3(arr) {
    return arr.filter((value, index) => {
        return arr.indexOf(value) == index;
    })
}
console.log(filter3(arr2));



// for循环进行去重
// function quChong(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[i] === arr[j]) {
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return arr;
// }
// // indexOf()
// function quChong1(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if(res.indexOf(arr[i]) === -1){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }
// // sort() 相同的值会被排在一起，然后我们就可以只判断当前元素与上一个元素是否相同，相同就说明重复，不相同就添加进res
// function quChong2(arr) {
//     let res = [];
//     let sortArr = arr.sort();
//     let seen;
//     for(let i = 0; i < sortArr.length; i++) {
//         if(arr[i] !== arr[i+1]) {
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// let res = quChong2(arr2);
// console.log(res);

// console.log(['1',1].sort());

