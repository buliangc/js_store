// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // 监听器 #1
// var listener1 = function listener1() {
//     console.log('监听器 listener1 执行。');
// }

// // 监听器 #2
// var listener2 = function listener2() {
//     console.log('监听器 listener2 执行。');
// }

// // 绑定 connection 事件，处理函数为 listener1 
// eventEmitter.addListener('connection', listener1);

// // 绑定 connection 事件，处理函数为 listener2
// eventEmitter.on('connection', listener2);

// var eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// // 处理 connection 事件 
// eventEmitter.emit('connection');

// // 移除监绑定的 listener1 函数
// eventEmitter.removeListener('connection', listener2);
// console.log("listener2 不再受监听。");

// // 触发连接事件
// eventEmitter.emit('connection');

// eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// eventEmitter.removeAllListeners('connection');
// console.log("connection 不再受监听。");

// eventListeners = eventEmitter.listenerCount('connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// console.log("程序执行完毕。");

// once 方法只监听一次，调用完毕后删除缓存函数（订阅一次）
class EventEmitter {
    eventList = {};
    // 补全代码
    on(eventName, callback) {
        if (this.eventList[eventName]) {
            this.eventList[eventName].push(callback);
        } else {
            this.eventList[eventName] = [callback];
        }
    };
    emit(eventName, args) {
        if (this.eventList[eventName]) {
            this.eventList[eventName].forEach((item) => {
                item(...args);
            })
        }
    };
    off(eventName, callback) {
        this.eventList[eventName].forEach((item, index) => {
            if (item === callback) {
                this.eventList[eventName].splice(index, 1);
            }
        })
    };
    // 只执行一次订阅的事件，然后移除
    once(eventName, callback) {
        // 绑定的时fn, 执行的时候会触发fn函数
        const fn = (...rest) => {
            callback() // fn函数中调用原有的callback
            this.off(eventName, fn) // 删除fn, 再次执行的时候之后执行一次
        }
        this.on(eventName, fn)
    }
}
// 监听器 #1
var listener1 = function listener1(data) {
    console.log('监听器 listener1 执行。', data);
}
var listener2 = function (...data) {
    console.log('监听器 listener2 执行。', data);
}
var eventEmitter = new EventEmitter();
eventEmitter.on('connection', listener1)
// eventEmitter.on('connection', listener1)
// eventEmitter.off('connection', listener1)
// eventEmitter.on('connection', listener1)
// eventEmitter.once('once', listener2)
// eventEmitter.emit('connection', "buliangc");
// eventEmitter.emit('once', "buliangc");
eventEmitter.emit('connection', ["buliangc"]);

// 发布订阅模式
// class EventEmitter {
//     constructor() {
//         // 事件对象，存放订阅的名字和事件  如:  { click: [ handle1, handle2 ]  }
//         this.events = {}
//     }
//     // 订阅事件的方法
//     on(eventName, callback) {
//         if (!this.events[eventName]) {
//             // 一个名字可以订阅多个事件函数
//             this.events[eventName] = [callback]
//         } else {
//             // 存在则push到指定数组的尾部保存
//             this.events[eventName].push(callback)
//         }
//     }
//     // 触发事件的方法
//     emit(eventName, ...rest) {
//         // 遍历执行所有订阅的事件
//         this.events[eventName] &&
//             this.events[eventName].forEach(f => f.apply(this, rest))
//     }
//     // 移除订阅事件
//     remove(eventName, callback) {
//         if (this.events[eventName]) {
//             this.events[eventName] = this.events[eventName].filter(f => f != callback)
//         }
//     }
//     // 只执行一次订阅的事件，然后移除
//     once(eventName, callback) {
//         // 绑定的时fn, 执行的时候会触发fn函数
//         const fn = (...rest) => {
//             callback.apply(this, rest) // fn函数中调用原有的callback
//             this.remove(eventName, fn) // 删除fn, 再次执行的时候之后执行一次
//         }
//         this.on(eventName, fn)
//     }
// }
