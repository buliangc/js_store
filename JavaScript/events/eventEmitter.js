function EventEmitter() {
    this.listeners = {
        
    }   // 用来存放自定义事件，以及其回调函数
    this.maxListener = 10;  // maxListener 是设置的某个事件能够添加的监听器的最大数量
}
EventEmitter.VERSION = '0.1'

EventEmitter.prototype.on = function(eventName, cb) {
    if(!eventName||!cb) return;
    // 判断listener是否为函数、
    if(typeof(cb) !== 'function') throw new Error('listener must be a function');
    var listeners = this.listeners;
    if (listeners[eventName] && listeners[eventName].length >= this.maxListener) {
        throw console.error('监听器的最大数量是%d,您已超出限制', this.maxListener)
    }
    if(listeners[eventName] instanceof Array) { // 判断该事件监听器数组是否初始化
        //若监听器数组已经被初始化，则判断数组中是否已存在cb,不存在则添加，已存在则不做操作
        if(listeners[eventName].indexOf(cb) === -1) { 
            listeners[eventName].push(cb);
        }
    }else {
        listeners[eventName] = [].concat(cb); // 若未初始化，则将listeners[event]初始化为数组，并加入监听器cb
    }
}
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

EventEmitter.prototype.emit = function(event) {
    let args = Array.from(arguments);
    args.shift();
    this.listeners[event].forEach(cb => {
        cb.apply(null, args);
    })
}

let o = new EventEmitter();
o.on('say', function(value1,value2){
    console.log(value1,value2);
});
o.on('say', (value1,value2) => {
    console.log(value1,value2);
});

o.emit('say','hello','world');