// function permute(nums) {
//     const res = [];
//     const backtrace = (path) => {
//         if (path.length == nums.length) {
//             res.push(path);
//             return;
//         }
//         nums.forEach(item => {
//             if (path.includes(item)) return;
//             backtrace(path.concat(item))
//         })
//     };
//     backtrace([]);
//     console.log(res);
//     return res;
// }

// permute([1, 2, 3])


const _permute = string => {
    // 补全代码
    const res = [];
    const backtrace = (path) => {
        if (path.length == string.length) {
            res.push(path);
            return;
        }
        for (const item of string) {
            if (path.includes(item)) continue;
            backtrace(path + item);
        }
        // for (let i = 0; i < string.length; i++) {
        //     if (path.includes(string[i])) return;
        //     backtrace(path + string[i]);
        // }
    }
    backtrace('');
    console.log(res);
    return res;
}

_permute('abc')

