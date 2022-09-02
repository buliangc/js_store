const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1")
    }, 1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2")
    }, 2000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P3")
    }, 3000)
})
// { status: 'fulfilled', value: res }
function myAllSettled(promiseArr) {
    let result = [];
    let count = promiseArr.length;
    return new Promise((resolve, reject) => {
        promiseArr.forEach(item => {
            Promise.resolve(item).then(res => {
                result.push({ status: "fulfilled", value: res })
            }).catch(err => {
                result.push({ status: "rejected", value: err })
            }).finally(() => { // promise has been settled
                if (!--count) {
                    resolve(result);
                }
            });
        })
    })
}

myAllSettled([p1, p2, p3]).then((res) => {
    console.log(res);
})