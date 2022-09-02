// 发布订阅模式

class EventEmitter {
    constructor() {
        this.eventList = {}
    }
    on(eventName, callback) {
        if (this.eventList[eventName]) {
            this.eventList[eventName].push(callback);
        } else {
            this.eventList[eventName] = [callback];
        }
    }
    emit(eventName, ...args) {
        this.eventList[eventName].forEach(callback => {
            callback(...args);
        })
    }
    off(eventName, callback) {
        this.eventList[eventName] = this.eventList[eventName].filter(item => item != callback);
        // console.log(this.eventList[eventName]);
        // this.eventList[eventName].forEach(item => item == callback)
    }
    watch(eventName) {
        console.log(this.eventList[eventName]);
    }
    once(eventName, callback) {
        const fn = (...args) => {
            callback(...args);
            this.off(eventName, fn);
        }
        this.on(eventName, fn);
    }
}

// 监听器 #1
var listener1 = function listener1(...data) {
    console.log('监听器 listener1 执行。', ...data);
}
var listener2 = function (...data) {
    console.log('监听器 listener2 执行。', ...data);
}
var eventEmitter = new EventEmitter();
eventEmitter.on('connection', listener1);
eventEmitter.off('connection', listener1);

eventEmitter.on('connection', listener1);
eventEmitter.watch('connection');
eventEmitter.once('once', listener2)
eventEmitter.emit('once', "buliangc", "lss");
eventEmitter.emit('once', "buliangc");

