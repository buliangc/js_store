// 一个关于Promise并发的题目。大概是：一次性可能发10个请求，
// 但是请求池控制一次性只能处理三个，请求池内的请求一个处理完后推进下一个请求
class Scheduler {
    queue = [];
    maxNum = 2;
    workingNum = 0;
    add(promiseCreate) {
        this.queue.push(promiseCreate);
    }
    // 启动doNext
    start() {
        for (let i = 0; i < this.maxNum; i++) {
            this.doNext();
        }
    }
    // 执行异步任务 并 控制并发数量
    async doNext() {
        if (this.queue.length && this.workingNum < this.maxNum) {
            this.workingNum++;
            await this.queue.shift()();
            this.workingNum--;
            this.doNext();
            // this.queue.shift()().then(() => {
            //     this.workingNum--;
            //     this.doNext();
            // })
        }
    }
}

const scheduler = new Scheduler();

const timeout = (time, order) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(order);
        }, time);
    })
}

const addTask = (time, order) => {
    scheduler.add(() => timeout(time, order).then((res) => console.log(res)))
}

// addTask(5000, 1)
// addTask(1000, 2)
// addTask(3000, 3)
// addTask(2000, 4)
// // 启动
// scheduler.start();
// 传递给 new Promise 的函数被称为 executor （执行者）。 当 new Promise 被创建，executor 会自动运行。

function a(time, val) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    }).then(() => {
        console.log(val)
    })
}

a(1000, "buliangc")