var partition = function (s) {
    let res = [];
    // 定义回溯算法
    const backTrack = (path, str) => {
        // 需要注意，这里必须是 tempRes 的拷贝
        if (str.length === 0) {
            res.push([...path]);
        }
        for (let i = 1; i <= str.length; i++) {
            if (isHuiWen(str.slice(0, i))) {
                path.push(str.slice(0, i))
                backTrack(path, str.slice(i, s.length))
                // 返回上一次递归时，需要去除这次递归的回文子串
                path.pop()
            }
        }
    }
    backTrack([], s);
    return res
};

const isHuiWen = (str) => {
    let arr = str.split('');
    return arr.join('') === arr.reverse().join('');
}

partition("aab");