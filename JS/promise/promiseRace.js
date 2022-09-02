// promiseRace = function (iterators) {
//     return new Promise((resolve, reject) => {
//         for (const p of iterators) {
//             console.log(p);
//             Promise.resolve(p)
//                 .then((res) => {
//                     console.log(`res ${res}`);
//                     resolve(res)
//                 })
//                 .catch(e => {
//                     reject(e)
//                 })
//         }
//     })
// };
// var promise1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 5000, 'one');
// });

// var promise2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 2000, 'two');
// });
// promiseRace([promise1, promise2]).then(function (value) {
//     console.log(value);
// });

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise1");
    }, 100);
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise2");
    }, 500);
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise3");
    }, 2000);
})

function myPromiseRace(promiseArr) {
    return new Promise((resolve, reject) => {
        const arr = Array.from(promiseArr);
        const length = arr.length;
        for (let i = 0; i < length; i++) {
            Promise.resolve(arr[i]).then(value => {
                resolve(value);
            }).catch(err => {
                reject(err);
            })
        }
    })
};
// myPromiseRace([promise1, promise2, promise3]).then(value => {
//     console.log(value);
// }).catch(err => {
//     console.log(err);
// })

Promise.race([promise1, 2, promise3]).then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
})
