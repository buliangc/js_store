let arr = [11, 12, 13]
arr.forEach((value, index) => {
    console.log(value, index);
})
arr.map((value, index) => {
    console.log(value, index);
})
arr.reduce((preValue, curValue, curIndex) => {
    console.log(preValue, curValue, curIndex);
})
arr.filter((value, index) => {
    console.log(value, index);
})
console.log(arr.every((value, index) => {
    return value > 11
}));
console.log(arr.some((value, index) => {
    return value > 10
}));
