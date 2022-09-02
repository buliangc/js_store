// // 模拟发送请求 ，只取最后一次的结果，前面的promise还没完成的话就取消
// function wrap() {
//     // your code
//     return arguments[0];
// }

// let count = 0;
// function sendRequest() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(++count)
//         })
//     });
// }
// let newWrap = wrap(sendRequest);
// newWrap().then(console.log)
// newWrap().then(console.log)
// newWrap().then(console.log) //输出3

// let count = 0;
// // 写一个可以输出自己被调用的次数的函数
// function diaoyong() {
//     count++
//     console.log(count);
// }
// diaoyong()
// diaoyong()
// diaoyong()
// diaoyong()

// 手写一个repeact()函数，加上下面的代码运行，使每3秒打印一个helloword，总共执行4次
// const repeact = function (fn, count, time) {
//     return function (s) {
//         for (let i = 0; i < count; i++) {
//             setTimeout(() => {
//                 fn(s)
//             }, time * (i + 1));
//         }
//     }
// }

// const repeatFunc = repeact(console.log, 4, 3000)
// repeatFunc('helloword')
// // 手写题1：settimeout(() => {console.log(1)}，1000)怎么让1在2s后打印，不能直接修改时间
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve();
//     }, 1000)
// }).then(() => {
//     setTimeout(() => { console.log(1) }, 1000)
// })

// // 实例链式调用：如let a = new Man(); a.sleep(3000).sayHi().sleep(1000).sleep(2000).sayHi(); 写出Man()构造函数

// function Man() {
//     this.sleep = function (time) {
//         console.log(time);
//         return this;
//     }
//     this.sayHi = function () {
//         console.log('hi');
//         return this;
//     }
// }
// let a = new Man();
// a.sleep(3000).sayHi().sleep(1000).sleep(2000).sayHi();

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function disOrder(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//         let random = Math.floor(Math.random() * (length - 1));
//         [arr[i], arr[random]] = [arr[random], arr[i]];
//     }
//     console.log(arr);
// }

// disOrder(arr);

// // 有大量封装好的并发请求（promise），在一个数组中，要求设计一个类，执行数组中的请求，限制最大并发请求数量，然后将结果都输出到一个数组中
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1");
//     }, 1000)
// })
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2");
//     }, 2000)
// })
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p3");
//     }, 3000)
// })

// class Scheduler {
//     constructor(maxNum) {
//         this.list = [];
//         this.maxNum = maxNum;
//         this.workingNum = 0;
//     }
//     add(promiseCreate) {
//         this.list.push(promiseCreate);
//     }
//     start() {
//         for (let i = 0; i < this.maxNum; i++) {
//             this.doNext();
//         }
//     }
//     doNext() {
//         if (this.list.length && this.workingNum < this.maxNum) {
//             this.workingNum++;
//             // console.log(this.list.shift());
//             this.list.shift()().then(() => {
//                 this.workingNum--;
//                 this.doNext();
//             })
//         }
//     }
// }

// const timeout = time => new Promise((resolve, reject) => setTimeout(resolve, time));
// const scheduler = new Scheduler(2);
// // 控制并发
// const addTask = (time, order) => {
//     scheduler.add(() => timeout(time).then(() => console.log(order)));
// }
// addTask(1000, "1")
// addTask(500, "2")
// addTask(300, "3")
// addTask(400, "4")
// scheduler.start()

// function stringToUint8Array(str) {
//     var arr = [];
//     for (var i = 0, j = str.length; i < j; ++i) {
//         arr.push(str.charCodeAt(i));
//     }

//     var tmpUint8Array = new Uint8Array(arr);
//     return tmpUint8Array
// }
// let res = stringToUint8Array("abc")
// console.log(res);
// console.log(Object.prototype.toString.call(res));

// function Uint8ArrayToString(fileData) {
//     var dataString = "";
//     for (var i = 0; i < fileData.length; i++) {
//         dataString += String.fromCharCode(fileData[i]);
//     }
//     console.log(dataString);
//     return dataString
// }
// let ures = Uint8ArrayToString([02, 00, 18, 00]);
// console.log(ures);
// console.log(Object.prototype.toString.call(ures));

// let buf1 = Buffer.from([0x02, 0x00, 0x18, 0x00])
// console.log(buf1.toString())
// var removeElement = function (nums, val) {
//     const n = nums.length;
//     let left = 0;
//     for (let right = 0; right < n; right++) {
//         if (nums[right] !== val) {
//             nums[left] = nums[right];
//             left++;
//         }
//     }
//     return left;
// };
// removeElement([1, 2, 2, 3, 3], 2)

// resp = {
//     message: 'success',
//     code: 0,
//     data: [{ title: 'hello' }]
// }

// function get(obj, res) {
//     let num = res.replace(/[^0-9]/ig, "");
//     let result = obj.data[num] ? obj.data[num].title : null;
//     console.log(result);
// }

// get(resp, 'data[0].title') // hello

// get(resp, 'data[1].title') // null


// function Person(name, age) {

//     this.name = name;
//     this.age = age; console.log(this);
// }

// let p = new Person("buliangc", 18)
// console.log(p);

// 递归实现两个数的乘积
// let sum = 0;
// function plus(a, b) {
//     console.log(a, b);
//     if (a == 0 || b == 0) {
//         return 0;
//     }
//     if (a < b) {
//         return b + plus(a - 1, b);
//     }
//     return a + plus(a, b - 1);
// }
// console.log(plus(1, 2));

// function f(x) {
//     var x;
//     console.log(x)
// }
// f(5)

// console.log(x); var x = 1; function x() { }

// function add(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         console.log(Number(arr[i]) * (10 ** (-i)));
//         sum = sum + Number(arr[i]) * (10 ** (-i));
//     }
//     return sum;
// }
// function compare(version1, version2) {
//     // write code here  版本号比较
//     let arr = version1.split(".");
//     // let arr1 = version2.split(".");
//     let a = add(arr)
//     // let b = add(arr1)
//     console.log(a);
//     // console.log(a, b)
//     // if (a > b) {
//     //     return 1
//     // } else if (a < b) {
//     //     return -1
//     // } else {
//     //     return 0
//     // }
// }

// compare("65.14.114.247.102.37.152.130.100.218.4.216.146.7.11.209.73.130.8.69.226")
// compare("65.14.114.247.102.37.152.130.100.218.4.216.146.7.11.209.73.130.8.69.36")

// 字符串中第一个只出现一个的字母位置
// function oneStr(str) {
//     let map = new Map();
//     for (let i = 0; i < str.length; i++) {
//         map.has(str[i]) ? map.set(str[i], map.get(str[i]) + 1) : map.set(str[i], 1)
//     }
//     let arr = Array.from(map).filter(item => {
//         return item[1] == 1
//     });
//     return arr[0][0]
// }
// console.log(oneStr("abcdeff"));
// console.log(oneStr("ffffaab"));
function three() {

}
// function paddingNum(input) {
//     //判断是正数还是负数
//     let flag = input ? true : false;
//     let val = Math.abs(input).toString().split(".");
//     let left = val[0];
//     let right = val[1] ? val[1] : "";
//     let tmp = '';
//     while (left.length > 3) {
//         tmp = "," + left.slice(-3) + tmp;
//         left = left.slice(0, left.length - 3);
//     }
//     if (!right) {
//         return flag ? left + tmp : "-" + left + tmp;
//     }
//     return flag ? left + tmp + "." + right : "-" + left + tmp + "." + right;
// }
// function toThousands(num) {
//     var result = '', counter = 0;
//     num = (num || 0).toString();
//     for (var i = num.length - 1; i >= 0; i--) {
//         counter++;
//         result = num.charAt(i) + result;
//         if (!(counter % 3) && i != 0) {
//             result = ',' + result;
//         }
//     }
//     return result;
// }
// console.log(paddingNum(33))
// console.log(paddingNum(1234.56))
// console.log(paddingNum(123456789))
// console.log(paddingNum(987654.321))
// console.log(paddingNum(-987654.3))
// function formatPrice(str) {
//     // console.log(Number(str));
//     if (Math.abs(Number(str)) < 10000) {
//         let flag = Number(str) ? true : false;
//         let arr = str.split(".");
//         let left = arr[0];
//         let right = arr[1] ? arr[1] : '';
//         let temp = '';
//         while (left.length > 3) {
//             temp = "," + left.slice(-3) + temp;
//             left = left.slice(0, left.length - 3);
//         }
//         if (!right) {
//             return flag ? left + temp + "元" : "-" + left + temp + "元";
//         }
//         return flag ? left + temp + "." + right + "元" : "-" + left + temp + "." + right + "元";
//     } else if (Number(str) < 100000000) {
//         let flag = Number(str) ? true : false;
//         let res = (Number(str) / 10000).toFixed(2);
//         // let flag = Number(str) ? true : false;
//         let arr = res.split(".");
//         let left = arr[0];
//         let right = arr[1] ? arr[1] : '';
//         let temp = '';
//         while (left.length > 3) {
//             temp = "," + left.slice(-3) + temp;
//             left = left.slice(0, left.length - 3);
//         }
//         if (!right) {
//             return flag ? left + temp + "万元" : "-" + left + temp + "万元";
//         }
//         return flag ? left + temp + "." + right + "万元" : "-" + left + temp + "." + right + "万元";
//     }
// }


// // let res = formatPrice('123456789101111111.23'); // 1,234,567,891.01 亿元
// let res = formatPrice('-12345678.22'); // 1,234,567,891.01 亿元
// console.log(res)    // 1,212.34 万元

// x y a b
// function pass(x, y, a, b) {
//     let yu = b % a;
//     let zheng = b / a;
//     if (yu == 0) {
//         let x_yu = zheng % x;
//         let y_yu = zheng % y;
//         if () {

//         }
//     } else {
//         console.log(-1);
//     }
// }
// pass(2, 3, 5, 20);

// 手写发布订阅
// class EventListener {
//     constructor() {
//         this.eventList = [];
//     }
//     // 订阅
//     on(eventName, callback) {
//         this.eventList[eventName] ? this.eventList[eventName].push(callback) : this.eventList[eventName] = [callback];
//     }
//     // 发布
//     emit(eventName, ...args) {
//         this.eventList[eventName].forEach(cb => {
//             cb(...args)
//         })
//     }
//     // 订阅一次
//     once(eventName, callback) {
//         const func = (...args) => {
//             callback(...args);
//             this.off(eventName, func);
//         }
//         this.on(eventName, func);
//     }
//     // 取消订阅
//     off(eventName, callback) {
//         this.eventList[eventName] = this.eventList[eventName].filter(item => item != callback);
//     }

// }
// // 监听器 #1
// var listener1 = function listener1(...data) {
//     console.log('监听器 listener1 执行。', ...data);
// }
// var listener2 = function (...data) {
//     console.log('监听器 listener2 执行。', ...data);
// }
// var eventEmitter = new EventListener();
// eventEmitter.on('connection', listener1);
// eventEmitter.off('connection', listener1);

// eventEmitter.on('connection', listener1);
// eventEmitter.emit('connection', "buliangc", "lss");

// eventEmitter.once('connection', listener1);
// eventEmitter.emit('connection', "buliangc");
// eventEmitter.emit('connection', "buliangc", "lss");


// function format(num) {
//     let str = num.toString();
//     let head = str.split('.')[0];
//     let end = str.split('.')[1];
//     let res = '';
//     while (head.length > 3) {
//         res = res + "," + head.slice(head.length - 3, head.length);
//         head = head.slice(0, head.length - 3);
//     }
//     res = head + res + "." + end;
//     return res;
// }

// // let res = formatPrice('123456789101111111.23');
// let res = format(111111.22);
// console.log(res)    // 1,212.34 万元


const _objectFreeze = object => {
    // 补全代码
    if (typeof object == null) return   // typeof Array和 typeof Null 等于Object
    for (let key in object) {
        if (typeof (object[key]) === 'object') {
            _objectFreeze(object[key])      //递归检查子属性
        } else {
            Object.defineProperty(object, key, {
                writable: false,
                configurable: false
            })
        }
    }
    Object.seal(object)    // 封闭 object 对象，在对象外面不能增加，不可删除，可修改
}
Function.prototype._bind = function (thisArg, ...args) {
    const that = this;
    return function (...args1) {
        return that.apply(thisArg, args1.concat(args))
    }
}

function t() {
    const o1 = {
        name: 'z',
        fn: function () {
            return this.name
        }
    };
    const o2 = { name: 'g' };
    const result = o1.fn._bind(o2);
    console.log(result);
    return result() === 'g'
}
t() 