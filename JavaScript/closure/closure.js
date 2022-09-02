// function getData(name, age, callback) {
    
// }

// var configChange = function(numId,config,callback){ 
//     console.log("to python configChange send "+config+" to "+numId+"|");

//     // callback(numId + config+"# 成功");
//     console.log(callback);
    
// }

// configChange('plc',"getWatch#",function(data){console.log(data)});
// (function (params) {
//     console.log(params);
// }('sss'))

// console.log(15.0.toString())

/**
 * @function 闭包
 */
// function closure() {
//     var a = 10;
//     return function() {
//         a++;
//         console.log(a);
//     }
// }

// let p = closure();
// p();
// p();
// p();
// function closure() {
//     for (var i = 0; i < 6; i++) {
//         (function (i) {
//             setTimeout(() => {
//                 console.log(i);
//             }, 1000) 
//         })(i)
//     }
// }
// closure()

