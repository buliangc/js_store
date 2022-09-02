// 首先new Promise的时候, 需要传递一个executor的执行器，执行器会立即执行
// executor执行器，接收两个参数resolve 和reject

// const p1 = new Promise((resolve, reject) => {
//     console.log("create one promise!");
//     resolve("成功了");
// })

// console.log("after a new promise");

// const p2 = new Promise((resolve, reject) => {
//     console.log("create two promise!");
// })

// const p3 = p1.then(data => {
//     console.log(data);
//     return "p3";
// })

// const p4 = p3.then((data)=>{
//     console.log(data);
//     return "nice" 
// }).then((data)=>{
//     console.log(data);
//     return "good"
// }).then((data)=>{
//     console.log(data);
// },err=>{
//     console.log(err);
// })

// class MyPromise {
//     static PENDING = "待定"; static FULFILLED = "成功"; static REJECTED = "拒绝";
//     constructor(executor) {
//         this.status = MyPromise.PENDING;
//         this.result = null;
//         executor(this.resolve.bind(this), this.reject.bind(this));
//     };
//     resolve(value) {
//         console.log(this);
//         if(this.status == MyPromise.PENDING){
//             this.status = MyPromise.FULFILLED;
//             this.result = value;
//         }
//     };
//     reject(reason) {
//         if(this.status == MyPromise.PENDING){
//             this.status = MyPromise.REJECTED;
//             this.result = reason;
//         }
//     };
//     then(onFULFILED, onREJECTED) {
//         onFULFILED = typeof onFULFILED == "function" ?  onFULFILED : () => {};
//         onREJECTED = typeof onREJECTED == "function" ? onREJECTED : () => {};
//         if(this.status == MyPromise.FULFILLED){
//             onFULFILED(this.result);
//         };
//         if(this.status == MyPromise.REJECTED){
//             onREJECTED(this.result);
//         }
//     }
// }

// 三个状态：PENDING、FULFILLED、REJECTED
class MyPromise {
    static PENDING = "待定"; static FULFILLED = "成功"; static REJECTED = "拒绝";
    constructor(executor) {
        this.status = MyPromise.PENDING;
        this.result = null;
        // 存放成功的回调
        this.onResolvedCallbacks = [];
        // 存放失败的回调
        this.onRejectedCallbacks= [];
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        }catch(err) {
            this.reject(err);   // 这里不需要给reject方法进行this的绑定了，因为这里是直接执行，而不是创建实例后再执行
        }
    };
    resolve(value) {
        setTimeout(() => {
            if(this.status == MyPromise.PENDING){
                this.status = MyPromise.FULFILLED;
                this.result = value;
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        })
    };
    reject(reason) {
        setTimeout(() => {
            if(this.status == MyPromise.PENDING){
                this.status = MyPromise.REJECTED;
                this.result = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        })
    };
    then(onFULFILED, onREJECTED) {
        return new MyPromise((resolve, reject) => {
            onFULFILED = typeof onFULFILED == "function" ?  onFULFILED : () => {};
            onREJECTED = typeof onREJECTED == "function" ? onREJECTED : () => {};
            if(this.status == MyPromise.PENDING){
                this.onResolvedCallbacks.push(() => {
                    onFULFILED(this.result);
                });
                this.onRejectedCallbacks.push(() => {
                    onREJECTED(this.result);
                })
            };
            if(this.status == MyPromise.FULFILLED){
                onFULFILED(this.result);
            };
            if(this.status == MyPromise.REJECTED){
                onREJECTED(this.result);
            }
        })
    }
}
console.log("第一步");
let p = new MyPromise((resolve, reject) => {
    console.log("第二步");
    setTimeout(() => {
        resolve("这次一定");
        // reject("下次一定");
        console.log("第四步");
    });
});

p.then(data=>{
    console.log(data);
},err=>{
    console.log('err',err);
})
console.log("第三步");