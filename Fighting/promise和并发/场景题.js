// 1 实现一个timeout函数,fn在seconds秒内执行则成功（直接使用setTimeout）
// function fn1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("success");
//             resolve();
//         }, 2000);
//     })
// }
// function timeout(fn, waitTime) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject();
//         }, waitTime);
//         fn().then(() => {
//             resolve();
//         })
//     })
// }
// timeout(fn1, 1000).then(() => {
//     console.log("成功")
// }).catch(() => {
//     console.log("失败")
// })

// 2 实现一个函数，三秒后执行指定函数
// function myFun() {
//     console.log("执行了");
// }

// function delayThree(fn) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             fn();
//             resolve();
//         }, 3000);
//     })
// }
// delayThree(myFun);

// 3 比较fn1和fn2哪个先执行完
// function fn1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("fn1先完成")
//         }, 1000);
//     })
// }

// function fn2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("fn2先完成")
//         }, 2000);
//     })
// }
// Promise.race([fn1(), fn2()]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// 4 改写Promise.all，给其中每个请求都加上超时时间，并给所有请求加上超时总时间
// const p1 = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("p1");
//         }, 4000);
//     })
// }

// function promiseAll(promiseArr, waitTime) {
//     let arr = [];
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('总请求超时')
//         }, 3000)
//         promiseArr.forEach(item => {
//             // setTimeout(() => {
//             //     reject('单个请求超时')
//             // }, 1000)
//             Promise.resolve(item).then((res) => {
//                 arr.push(res);
//                 if (arr.length == promiseArr.length) {
//                     resolve(arr);
//                 }
//             }).catch(err => {
//                 reject(err);
//             })
//         })
//     })
// }
// promiseAll([p1(), p1(), p1(), p1()]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// 5. 有20个请求，需要限制执行，并发请求只有4个
// 6 用promise实现最大并发请求数


// 8 async和promise 每隔一秒打印一次
// function repeat(func, times, waitTime) {
//     return async function (...args) {
//         for (let i = 0; i < times; i++) {
//             await new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     func(...args)
//                     resolve();
//                 }, waitTime)
//             })
//         }
//     }
// }

// // 使下面调用代码能正常工作
// const repeatFunc = repeat(console.log, 4, 1000);
// repeatFunc("hellworld");//会输出4次 helloworld, 每次间隔1秒

// 9 每隔一秒依次输出0,1,2,3,4,5
// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     })(i)
// }
// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000)
// }

// 10 每隔n秒打印n
// 给了一个sleep函数， 实现功能，隔1s打印1，再隔2s打印2，隔3秒打印3
// function sleep(timeout) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, timeout)
//     })
// }

// async function main() {
//     // 写代码
//     for (let i = 1; i < 4; i++) {
//         await sleep(i * 1000);
//         console.log(i);
//     }
// }

// main()

// 给定一个promise数组[p1,p2,p3...]
// 1.返回物理上第一个成功的promise的结果
// 2.若全部为失败，则返回物理上最后一个promise的结果
const p1 = new Promise((resolve, reject) => {
    // 内部相当于同步任务
    setTimeout(() => {
        console.log("1");
        reject("1");
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    // 内部相当于同步任务
    setTimeout(() => {
        console.log("2");
        reject("2");
    }, 2000);
})
const p3 = new Promise((resolve, reject) => {
    // 内部相当于同步任务
    setTimeout(() => {
        console.log("3");
        reject("3");
    }, 3000);
})

function myAllSettled(promiseArr) {
    let count = 0;
    return new Promise((resolve, reject) => {
        promiseArr.forEach(item => {
            Promise.resolve(item).then(res => {
                resolve(res);
            }).catch(err => {
                if (++count == promiseArr.length) {
                    reject(err);
                }
            })
        })
    })
}

myAllSettled([p1, p2, p3]).then((res) => {
    console.log("第一个" + res + "完成");
}).catch((err) => {
    console.log("最后一个" + err)
})
