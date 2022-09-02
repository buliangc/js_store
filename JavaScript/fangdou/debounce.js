/**
 * 
 * @param {函数} func 
 * @param {延时时间} wait 
 * @description 1.防抖在延时结束后才执行。2.this指向调用者(这里是div)。3.事件e是鼠标事件 4.第三个参数会立即执行
 */    


// function debounce(func, wait, immediate) {
//     let timeOut;
//     return function() {
//         clearTimeout(timeOut);
//         if(immediate) { // 如果immediate的true的话,
//             let callNow = !timeOut;
//             timeOut = setTimeout(() => {
//                 timeOut = null;
//             },wait);
//             console.log(timeOut,callNow);
//             if(callNow) func.apply(this,arguments);
//         }else {
//             timeOut = setTimeout(() => {
//                 func.apply(this,arguments);
//             }, wait);
//         }
//     }
// }
// 首先返回的是一个函数
// function debounce(func, wait, immediate = true) {
//     let timeOut;
//     return function() {
//         let args = arguments;
//         let result = null;
//         clearTimeout(timeOut);
//         if(immediate){
//             let callNow = !timeOut;
//             timeOut = setTimeout(() => {
//                 timeOut = null;
//             }, wait);
//             if(callNow) result = func.apply(this, args);
//         }else {
//            timeOut = setTimeout(() => {
//                 func.apply(this, args);
//             }, wait); 
//         }
//         return result;
//     }
// }

function debounce(func, wait, immediate = true) {
    let timeOut,result;
    return function() {
        clearTimeout(timeOut);
        if(immediate) {
            let callNow = !timeOut;
            timeOut = setTimeout(() => {
                timeOut = null;
            }, wait);
            if(callNow) result = func.apply(this, arguments);
        }else {
           timeOut = setTimeout(() => {
             func.apply(this, arguments);
            }, wait);
        }
        return result;
    }
}

let count = 0;
let box = document.getElementById('box');
let btn = document.getElementById('btn');
function doSomething(e) {
    console.log(e);
    box.innerHTML = count++;
    return '不良菜'
}
box.onmousemove = debounce(doSomething, 300);

function onBtnClick() {
    clearTimeout(timeOut);
    console.log(timeOut);
}
btn.onclick = onBtnClick;
// box.onmousemove = doSomething;
// box.onmousemove = _.debounce(doSomething, 300, true);

// export default debounce;