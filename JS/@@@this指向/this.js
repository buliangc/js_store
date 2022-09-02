// const a = 10

// const obj = {
//     a: 13,
//     b: () => {
//         console.log(this.a);
//     },
//     c: function () {
//         console.log(this.a)
//         this.b()
//     }
// }

// obj.b()
// obj.c()

// 10 13 10

// function foo(a) {
//     this.a = a;
// }
// var obj1 = {};
// var bar = foo.bind(obj1);
// bar(2);

// console.log(obj1.a);    // ?
// var baz = new bar(3);
// console.log(obj1.a);    // ?

// console.log(baz.a)      // ?

var obj = {
    name: 'cuggz',
    fun: function () {
        var name = "buliangc";
        console.log(this);
        console.log(this.name);
    }
}
obj.fun()       // cuggz
new obj.fun()   // new构造函数 相当于内部的this重新指向了构造函数fun
