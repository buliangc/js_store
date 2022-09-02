// 防抖函数
// 原理： 利用setTimeout的方式，在一定的时间间隔内，将多次触发变成一次触发。
// 就是每次调用函数前，先移除上次还处于延迟中的任务，然后重新发起一次新的延迟等待。
// 同时处理函数中的this指向 和 event事件对象，分别要是绑定的对象和对应事件
function debounce(handle, wait, immediate) {
    let time = null;
    return function (...args) {
        let self = this;
        init = immediate && !time;

        if (time) {
            clearTimeout(time);
        }
        if (!time && immediate) {
            handle.apply(self, args);
        } else {
            time = setTimeout(() => {
                handle.apply(self, args);
            }, wait);
        }
    }
}
// function debounce(fn, delay, immediate) {
//     if (typeof fn !== 'function') { // 参数类型为函数
//         throw new TypeError('fn is not a function');
//     }

//     let time = null;
//     return function (...args) {
//         clearTimeout(time);
//         if (immediate) {
//             console.log(time);
//             // 如果time为null，说明第一次点; 如果不为null, 说明在wait时间内，连续在点
//             let firstClick = !time;
//             if (firstClick) {
//                 fn.apply(this, args);
//             }
//             time = setTimeout(() => {
//                 time = null;
//             }, delay);
//         } else {
//             time = setTimeout(() => {
//                 fn.apply(this, args);
//             }, delay);
//         }
//     }
// }

// 实现最简单的防抖
// function debounce(fn, delay, immediate) {
//     let time = null;
//     return function (...args) {
//         clearTimeout(time);
//         if (immediate) {
//             let firstClick = !time;
//             if (firstClick) {
//                 fn.apply(this, args);
//             }
//             time = setTimeout(() => {
//                 time = null;
//             }, delay);
//         } else {
//             time = setTimeout(() => {
//                 fn.apply(this, args);
//             }, delay);
//         }

//     }
// }