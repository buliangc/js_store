function EventEmitter() {
    this.listener = {};
    this.maxListener = 10;
}

EventEmitter.VERSION = 0.1;

EventEmitter.prototype.on = function(event, cb) {
    if(!event||!cb) return;
    if(typeof(cb) === 'function') throw new Error('it is not a function!');
    var listener = this.listener;
    // 检验监听数组有没有超过最大限制
    if(listener[event] && listener[event].length > this.maxListener){
        throw console.error('监听器的最大数量是%d,您已超出限制',this.maxListener);
    }
    // 检测监听器数组是否初始化
    if(listener[event] instanceof Array){
        if(listener[event].indexOf(cb) === -1) {
            listener[event].push(cb);
        }
    }else {
        listener[event] = [].concat(cb);
    }
}

EventEmitter.prototype.addListener = EventEmitter.prototype.on;

EventEmitter.prototype.emit = function(event, ...args) {
    this.listener[event].forEach((cb) => {
        cb.apply(null, args);
    })
}

EventEmitter.prototype.removeListener = function(event, cb) {
    var index = this.listener[event].indexOf(cb);
    this.listener[event].splice(index, 1);
}

EventEmitter.prototype.removeAllListener = function(event) {
    this.listener[event] = [];
}
// once很重要 on和removeListener结合 执行一次之后进行销毁
EventEmitter.prototype.once = function(event, cb) {
    var self = this;
    function fn(...args) {
        cb.apply(null, args);
        self.removeListener(event, cb);
    }
    this.on(event, fn);
}