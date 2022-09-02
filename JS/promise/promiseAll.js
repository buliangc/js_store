// function PromiseAll(promiseArray) {
//     //请在此处补全代码
//     return new Promise((resolve, reject) => {
//         if(!Array.isArray(promiseArray)){
//             return reject(new Error("传入的参数不是数组!"));
//         };        
//         // const promises = Array.from(promiseArray);
//         // 定义Promise对象resolve的数组
//         const result = [];
//         // 定义一个计数器用来判断是否所有的promise执行完毕
//         let count = 0;
//         // 并发执行每一个promise
//         for (let i = 0; i < promiseArray.length; i++) {
//             Promise.resolve(promiseArray[i]).then(res => {
//                 result[i] = res;
//                 if (++count === promiseArray.length) {
//                     resolve(result);
//                 }
//             }).catch(err => reject(err));
//         }
//     })
// }



// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p1');
//         console.log("执行P1");
//     }, 1000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p2');
//         console.log("执行P2");
//     }, 2000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('p3');
//         console.log("执行P3");
//     }, 3000)
// })


// function PromiseAll(promiseArray) {
//     return new Promise((resolve, reject) => {
//         if (!Array.isArray(promiseArray)) {
//             return reject(new Error("参数不是数组"))
//         };
//         const arr = Array.from(promiseArray);
//         const result = [];
//         let count = 0;
//         for (let i = 0; i < arr.length; i++) {
//             Promise.resolve(arr[i]).then((value) => {
//                 console.log(value);
//                 result[i] = value;
//                 if (++count == arr.length) {
//                     resolve(result);
//                 }
//             }).catch(err => {
//                 reject(err);
//             })
//         }
//     })
// }


// console.time("cost")
// const test = PromiseAll([p1, p2, p3])
//     .then(res => { console.log(res); console.timeEnd("cost") }
//     )
//     .catch(e => console.log(e))

// console.log(test);


// 实现promiseAll
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1");
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
function PromiseAll(promiseArr) {
    return new Promise((resolve, reject) => {
        const length = promiseArr.length;
        let count = 0;
        let res = [];
        for (let i = 0; i < length; i++) {
            Promise.resolve(promiseArr[i]).then((value) => {
                res.push(value);
                if (++count == 3) {
                    resolve(res);
                }
            }).catch(err => {
                reject(err);
            })
        }
    })
}

PromiseAll([promise1, 2, promise3]).then(value => {
    console.log(value);
}).catch(err => {
    console.log(err);
})