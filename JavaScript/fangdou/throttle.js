// 顾头不顾尾
// function throttle(func, wait) {
//     let old = 0;
//     return function() {
//         let now = new Date().valueOf();
//         console.log(now);
//         // now会一直增加，每当now - old > wait的时候，超过2000的时候，就会执行
//         // 当你一离开的时候，便不会再执行了，因为相减不超过2000
//         if(now - old > wait){
//             console.log(now - old);
//             old = now;
//             func.apply(this, arguments);
//         }
//     }
// }
// function throttle(func, wait) {
//     let timeOut;
//     let old = 0;
//     return function() {
//         let now = new Date().valueOf();
//         if(now - old> wait) {
//             if(timeOut) {
//                 clearTimeout(timeOut);
//                 timeOut = null;
//             }
//             func.apply(this, arguments);
//             old = now;
//         }
//         if(!timeOut) {
//             timeOut = setTimeout(() => {
//                 old = new Date().valueOf();
//                 timeOut = null;
//                 func.apply(this, arguments);
//             },wait)
//         }
//     }
// }
// 节流
// function throttle(func, wait) {
//     let old = 0;
//     let timeOut = null;
//     return function() {
//         let now = new Date().valueOf();
//         if(now - old > wait) {
//             if(timeOut) {
//                 clearTimeout(timeOut);
//                 timeOut = null;
//             }
//             func.apply(this, arguments);
//             old = now;
//         };
//         if(!timeOut){
//             timeOut = setTimeout(() => {
//                 old = new Date().valueOf();
//                 timeOut = null;
//                 func.apply(this, arguments);
//             }, wait);
//         }
//     }
// }

function throttle(fn, wait) {
    let old = 0;
    let timeOut;
    return function() {
        let now = new Date().valueOf();
        if(now - old> wait) {
            if(timeOut) {
                clearTimeout(timeOut);
                timeOut = null;
            }
            fn.apply(this, arguments);
            old = now;
        }
        if(!timeOut) {
            timeOut = setTimeout(() => {
                old = new Date().valueOf();
                timeOut = null;
                fn.apply(this, arguments);
            }, wait);
            console.log(timeOut);
        }
    }
}

let count = 0;
let box = document.getElementById('box');
function doSomething(e) {
    console.log(e);
    box.innerHTML = count++;
    return '不良菜'
}
box.onmousemove = throttle(doSomething, 1000);