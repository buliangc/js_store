var a = 10;
(function () {
    console.log(this.a);
})()
// 首先会进行函数提升 再进行变量提升 块级作用域
var a = 1;
function func() {
    { console.log(a); }
    var a = 2;
}
func();  // undefined


var a = 1;
function func() {
    { console.log(a); }
    let a = 2;
}
func();  // 报错