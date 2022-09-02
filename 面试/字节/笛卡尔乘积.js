// 笛卡尔乘积: fn([['a', 'b'], ['n', 'm'], ['0', '1']]) => ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]
function fn(arr) {
    return arr.reduce((pre, next) => {
        let res = []
        pre.forEach(a => {
            next.forEach(b => {
                let temp = '' + a + b
                res.push(temp)
            })
        })
        return res;
    })
}

console.log(fn([
    ['a', 'b'],
    ['n', 'm'],
    ['0', '1']
]))