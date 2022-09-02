const p1 = new Promise((resolve, reject) => {
    // 内部相当于同步任务
    setTimeout(() => {
        console.log("1");
        resolve("1");
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    // 内部相当于同步任务
    setTimeout(() => {
        console.log("2");
        resolve("2");
    }, 2000);
})
const p3 = new Promise((resolve, reject) => {
    // 内部相当于同步任务
    setTimeout(() => {
        console.log("3");
        resolve("3");
    }, 3000);
})

// Promise.all([p1, p2, p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err)
// })

function myPromiseAll(promiseArr) {
    let arr = [];
    return new Promise((resolve, reject) => {
        promiseArr.forEach(item => {
            Promise.resolve(item).then(res => {
                arr.push(res);
                if (arr.length == promiseArr.length) {
                    resolve(arr);
                }
            }).catch(err => {
                reject(err);
            })
        })
    })
}
myPromiseAll([p1, p2, p3]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})

// Promise.all([p1, 2, p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err)
// })