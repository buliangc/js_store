// Array.prototype.myPush = function(...args) {
//     let arr = this;
     
// }
Array.prototype.myPush = function() {
    for( let i = 0 ; i < arguments.length ; i++){
        this[this.length] = arguments[i] ;
    }
    return this.length;
}

let arr = ['Jerry', 'Tom'];

arr.myPush('buliangc', 'double');

console.log(arr);