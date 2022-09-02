// var combine = function (n, k) {
//     let res = [];
//     const backtracking = (path, startIndex) => {
//         //
//         if (path.length == 2) {
//             res.push(JSON.parse(JSON.stringify(path)));
//             console.log(res);
//             return;
//         }
//         // for循环 + 递归 + 回溯
//         for (let i = startIndex; i <= n; i++) {
//             path.push(i);
//             backtracking(path, startIndex + 1);
//             path.pop();
//         }
//     }
//     backtracking([], 1);
//     return res;
// };
// combine(4, 2);

// 1 2 3 4 找出大小为2的组合
var combine = function (n, k) {
    let path = [];
    let res = [];
    const backtracking = (n, k, startIndex) => {
        if (path.length == k) {
            res.push(JSON.parse(JSON.stringify(path)));
            return;
        }
        for (let i = startIndex; i <= n; i++) {
            path.push(i);
            backtracking(n, k, i + 1);
            path.pop();
        }
    }
    backtracking(n, k, 1);
    console.log(res);
    return res;
};

combine(4, 2);