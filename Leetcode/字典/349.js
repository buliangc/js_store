// 使用字典
function interSection(num1, num2) {
    const map1 = new Map()
    num1.map(item => map1.set(item, true));
    const res = [];
    num2.forEach((item) => {
        if (map1.get(item)) {
            res.push(item);
            map1.delete(item);
        }
    })
    return res;
}

interSection([1, 2, 2, 1], [2, 2]);