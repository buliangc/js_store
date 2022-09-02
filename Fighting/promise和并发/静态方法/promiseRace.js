const p1 = new Promise((resolve, reject) => {
    // 内部相当于同步任务
    setTimeout(() => {
        resolve("1");
    }, 3000);
})
const p2 = new Promise((resolve, reject) => {
    // 内部相当于同步任务
    setTimeout(() => {
        reject("2");
    }, 2000);
})
const p3 = new Promise((resolve, reject) => {
    // 内部相当于同步任务
    setTimeout(() => {
        resolve("3");
    }, 1000);
})

Promise.race([p1, 2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
})

function myPromiseRace(promiseArr) {
    return new Promise((resolve, reject) => {
        promiseArr.forEach(item => {
            Promise.resolve(item).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    })
}

myPromiseRace([p1, 2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
})
