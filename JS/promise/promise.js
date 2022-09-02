// console.log("第一步");
// let p = new Promise((resolve, reject) => {
//     console.log("第二步");
//     setTimeout(() => {
//         resolve("这次一定");
//         reject("下次一定");
//         console.log("第四步");
//     });
// });

// p.then(value => {
//     console.log(value);
// },err => {
//     console.log(err);
// });
// console.log("第三步");
// 微任务
// p.then(value => {
//     console.log(value);
// }, err => {
//     console.log(err);
// })
// // 宏任务
// setTimeout(() => {
//     console.log("定时");
// }, 0)

// async function async1() {
//     console.log("A");    
//     await async2();
//     console.log("B");
// }

// async function async2() {
//     console.log("C");
// }

// 如果async函数里面，没有用到await 那就相当于一个普通函数
// function async2() {
//     console.log("C");
// }
// function async1() {
//     console.log("A");  
//     new Promise((resolve, reject) => {
//         console.log("C");
//         resolve();
//     }).then(() => {
//         console.log("B");
//     })
// };

// console.log("D");

// setTimeout(() => {
//     console.log("E");
// });

// async1();

// new Promise((resolve, reject) => {
//     console.log("F");
//     resolve();
// }).then(() => {
//     console.log("G");
// });

// console.log("H");

// D H F A 

// console.log("start");
// setTimeout(() => {
//     console.log("children2")
//     Promise.resolve().then(() =>{
//         console.log("children3")
//     })
// }, 0)

// new Promise(function(resolve, reject){
//     console.log("children4")
//     setTimeout(function(){
//         console.log("children5")
//         resolve("children6")
//     }, 0)
// }).then(res =>{         // flag
//     console.log("children7")
//     setTimeout(() =>{
//         console.log(res)
//     }, 0)
// })

// // 
// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     new Promise(function (resolve) {
//         console.log('promise1');
//         resolve();
//     }).then(function () {
//         console.log('promise2');
//     });
// }
// console.log('script start');
// setTimeout(function () {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function (resolve) {
//     console.log('promise3');
//     resolve();
// }).then(function () {
//     console.log('promise4');
// });
// console.log('script end');

// script start | async1 start | promise1 | promise3 | script end | promise2 | async1 end | promise4 | setTimeout

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     setTimeout(function() {
//         console.log('setTimeout1')  // 这一部分代码会放入到 promise 的微任务队列中。
//     },0)
// }
// async function async2() {
//     setTimeout(function() {
//         console.log('setTimeout2')
//     },0)
// }
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout3');
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end');
// script start | async1 start | promise1 | script end | promise2 | setTimeout3 | setTimeout2 | setTimeout1 | 

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     //async2做出如下更改：
//     new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
//     });
// }
// console.log('script start');

// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)
// async1();

// new Promise(function(resolve) {
//     console.log('promise3');
//     resolve();
// }).then(function() {
//     console.log('promise4');
// });

// console.log('script end');
// script start    async1 start  promise1   promise3  script end   promise2   async1 end   promise4   setTimeout

// async function async1() {
//     console.log('async1 start');
//     await async2();
//     //更改如下：
//     setTimeout(function() {
//         console.log('setTimeout1')
//     },0)
// }
// async function async2() {
//     //更改如下：
// 	setTimeout(function() {
// 		console.log('setTimeout2')
// 	},0)
// }
// console.log('script start');

// setTimeout(function() {
//     console.log('setTimeout3');
// }, 0)
// async1();

// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end');

// script start   async1 start   promise1   script end   promise2  setTimeout3  setTimeout2    setTimeout1

async function a1 () {
    console.log('a1 start')
    await a2()
    console.log('a1 end')
}
async function a2 () {
    console.log('a2')
}
console.log('script start')
setTimeout(() => {
    console.log('setTimeout')
}, 0)
Promise.resolve().then(() => {
    console.log('promise1')
})
a1()
let promise2 = new Promise((resolve) => {
    resolve('promise2.then')
    console.log('promise2')
})
promise2.then((res) => {
    console.log(res)
    Promise.resolve().then(() => {
        console.log('promise3')
    })
})
console.log('script end')

// script start   a1 start  a2  promise2  script end   promise1   a1 end   promise2.then  promise3  setTimeout
// setTimeout 
// a1 end    promise1   promise2.then  promise3