function formatPrice(str) {
    if (Number(str) < 10000) {
        return Number(str).toFixed(2) + " 元";
    } else if (Number(str) < 100000000) {
        str = (str / 10000).toFixed(2).toString();
        console.log(str.slice(0, -3));
        let res = addSymbol(str.slice(0, -3));
        return res + str.slice(-3) + ' 万元'
    } else {
        str = (str / 100000000).toFixed(2).toString();
        let res = addSymbol(str.slice(0, -3));
        console.log(res)
        return res + str.slice(-3) + ' 亿元'
    }
}

function addSymbol(num) {
    console.log(num)
    let res = ''
    while (num.length > 3) {
        res = ',' + num.slice(-3) + res;
        num = num.slice(0, num.length - 3);
    }
    return num + res;;
}

// let res = formatPrice('123456789101111111.23');
let res = formatPrice('11111111.22');
console.log(res)    // 1,212.34 万元