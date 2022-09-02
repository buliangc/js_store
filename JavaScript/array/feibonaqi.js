let a = 1;
let b = 1;
let c = 1;
let arr = [1, 1, 1];
function feibonaqi(max) {
    for (let i = 0; i <max; i++){
        [a, b, c] = [b, c, a+b+c]
        arr.push(c);
    }

    return arr;
}

let newArr = feibonaqi(10);
console.log(newArr);
