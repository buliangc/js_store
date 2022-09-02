//  一段时间内重复触发，按一定频率(3s、5s)执行，可配置一开始就执行一次
function throttle(handle,wait,immediate) {
    let begin = 0;
    return function (...args) {
        let cur = new Date().getTime();
        console.log(cur - begin);
        if(cur - begin > wait){
            handle.apply(this, args);
            begin = cur;
        }
    }
}