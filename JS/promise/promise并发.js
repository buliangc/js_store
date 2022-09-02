// 给其中每个请求都加上超时时间
// 延时函数
// const sleep = (delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("超时喽")
//         }, delay)
//     })
// }

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise1");
//     }, 100);
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise2");
//     }, 500);
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise3");
//     }, 2000);
// })
// function PromiseAll(promiseArr) {
//     return new Promise((resolve, reject) => {
//         const length = promiseArr.length;
//         let count = 0;
//         let res = [];
//         for (let i = 0; i < length; i++) {
//             Promise.resolve(promiseArr[i]).then((value) => {
//                 res.push(value);
//                 if (++count == 3) {
//                     resolve(res);
//                 }
//             }).catch(err => {
//                 reject(err);
//             })
//         }
//     })
// }

// PromiseAll([promise1, promise2, promise3, sleep(200)]).then(value => {
//     console.log(value);
// }).catch(err => {
//     console.log(err);
// })
// 调度器
class Scheduler {
    list = [];
    maxNum = 2;
    workingNum = 0;

    add(promiseCreator) {
        this.list.push(promiseCreator);
    }
    start() {
        for (let i = 0; i < this.maxNum; i++) {
            this.doNext();
        }
    }
    doNext() {
        if (this.list.length && this.workingNum < this.maxNum) {
            this.workingNum++;
            this.list.shift()().then(() => {
                this.workingNum--;
                this.doNext();
            })
        }
    }
}


const timeout = time => new Promise((resolve, reject) => setTimeout(resolve, time));
const scheduler = new Scheduler();
// 控制并发
const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)));
}
addTask(1000, "1")
addTask(500, "2")
addTask(300, "3")
addTask(400, "4")

scheduler.start();