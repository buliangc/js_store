let arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
// filter indexOf  
// set
function quchong1(arr) {
    return arr.filter((currentValue, index) => {
        return index == arr.indexOf(currentValue);
    })
}

function quchong2(arr) {
    let set = new Set();
    arr.forEach(item => {
        set.add(item);
    })
    return Array.from(set);
    // const unique = arr => [...new Set(arr)];

}
console.log(quchong1(arr));
console.log(quchong2(arr));