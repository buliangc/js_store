var letterCombinations = function (digits) {
    if (digits.length == 0) return [];//字符串为空返回空数组
    let map = new Map([//用哈希表存储按键对应的字母
        ['2', 'abc'],
        ['3', 'def'],
        ['4', 'ghi'],
        ['5', 'jkl'],
        ['6', 'mno'],
        ['7', 'pqrs'],
        ['8', 'tuv'],
        ['9', 'wxyz']
    ]);
    let res = [];
    function backtrack(cur, digits) {
        if (digits.length == 0) {
            res.push(cur);//已经遍历完字符串中所有数字，得到的字母组合是完整的
            return;
        }
        let str = map.get(digits[0]);//每次取第一个数字
        for (let i = 0; i < str.length; i++) {//遍历当前按键的所有字母，遍历完后面的按键会回溯到当前按键的下一个字母
            backtrack(cur + str[i], digits.slice(1));//带着当前字母组合去找下一个按键对应的字母
        }
    }
    backtrack('', digits);//回溯
    return res;
};

letterCombinations('23')