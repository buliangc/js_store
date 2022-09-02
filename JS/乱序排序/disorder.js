const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function disorder(arr) {
    let length = arr.length;
    let current = length - 1;
    while (current--) {
        let random = Math.floor(Math.random() * (0, arr.length));
        [arr[current], arr[random]] = [arr[random], arr[current]];
    }
    return arr;
}
console.log(disorder(arr));

function disorder1(arr) {
    const length = arr.length;
    let current = length - 1;
    while (current--) {
        let random = Math.floor(Math.random() * (0, arr.length));
        [arr[current], arr[random]] = [arr[random], arr[current]];
    }
}

disorder1(arr);