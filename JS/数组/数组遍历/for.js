const arr = [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1]
console.time("time")
for (let j = 0; j < arr.length; j++) {
    // console.log("i");
}
console.timeEnd("time");
console.time("time1")
for (let j = 0, len = arr.length; j < len; j++) {
    // console.log("i");
}
console.timeEnd("time1");
console.time("time2")
arr.forEach(function (e) {

});
console.timeEnd("time2");
console.time("time3")
arr.map(value => {

});
console.timeEnd("time3");
