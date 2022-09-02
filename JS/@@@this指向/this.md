# this指向的四个规则 显示 隐式 绑定 new
# 执行上下文 (Execution Context)上包含三个属性 Variable Object  作用域链  this
就是在创建执行上下文时 this指向的环境对象已经确定好了 可能有全局 可能有对象 执行时根据调用者来选择this执行
```javascript
    var a = 0;
    var obj = {
        a: 2,
        foo: function() {
            console.log(this);      // this指向obj 
            function test() {
                console.log(this);
            }
            test();     // 函数的独立调用 内部this指向window
        }
    }
    obj.foo();
```
# 函数的四种调用方式
1. 独立调用 this 指向window
2. 方法调用 this 指向调用者
3. 间接调用 apply call bind 
4. 构造函数调用 this 指向构造函数
构造函数使用 this 关键字定义变量和方法，当 this 遇到 return 的时候，会发生指向不明（调用结果不明）的问题：

return 返回的不是一个对象，this 还是指向实例（新对象），调用结果也还是新对象；
return 返回的是 null，this 还是指向实例，调用结果也还是新对象；
return 返回的是一个对象，this 就指向这个返回的对象，调用结果就是这个返回的对象；

# this绑定
 

```javascript
    function foo(a) {
        this.a = a;
    }
    var obj1 = {};
    var bar = foo.bind(obj1);
    bar(2);

    console.log(obj1.a);    // ?
    var baz = new bar(3);
    console.log(obj1.a);    // ?

    console.log(baz.a)      // ?
```
分析： new bar(3)，new的this绑定优先级高于bind，所以这时候this指向baz，而不是obj1.所以是baz身上绑定了属性a；
函数独立调用，this指向window 
立即执行函数 IIFE， this指向window
```javascript
    (function(){
        console.log(this);
    })()
```
闭包：当函数执行的时候，导致函数被定义，并抛出。(闭包就是在一个作用域中可以使用另一个作用域的变量)
 
# 箭头函数 
箭头函数内部没有this指向，也没有arguments对象
```javascript  默认绑定规则 (独立调用对箭头函数) 无效
    function foo() {
        console.log(this);
        var test = function () {
            console.log(this);
        }
        return test;
    }

    var obj1 = {
        a: 1,
        foo: foo
    }
    obj1.foo()();   //返回一个箭头函数 默认绑定规则 (独立调用对箭头函数) 无效，this仍指向父this
```
```javascript 隐式绑定规则 无效
    var obj1 = {
        a:1,
        foo: () => {
            console.log(this);
        }
    }
    obj1.foo(); // 对象调用 也是 隐式绑定 输出window
```
```javascript  显示绑定规则 call bind 无效
    function foo() {
        console.log(this);
        var test = function () {
            console.log(this);
        }
        return test;
    }

    var obj1 = {
        a: 1,
        foo: foo
    }
    foo().bind(obj1);   //返回一个箭头函数 默认绑定规则 (独立调用对箭头函数) 无效，this仍指向父this
```
```javascript new 不能实例箭头函数
    var foo = () => {
        console.log(this);
    }
    var f = new foo(); // 报错
```

## 箭头函数：所有绑定规则全部不适用，箭头函数的this取决于父环境中的this
```对象不构成单独的作用域，所以箭头的函数的this就指向了全局作用域window。```
```javascript
var obj = {
    say: function () {
        var f1 = () => {
            console.log("1111", this);
        }
        f1();
    },
    pro: {
        getPro: () => {
            console.log(this);
        }
    }
}
var o = obj.say;
o();            // 隐式绑定中的this丢失
obj.say();      // 
obj.pro.getPro();// 对象不构成单独的作用域，所以箭头函数的this就指向了全局作用域
```
注意 new运算符，将this指向改为构造函数。如果构造函数里面的this绑定了属性就有，如果仅仅是定义了一个，则并非挂载在上面
```javascript
var obj = {
    name: 'cuggz',
    fun: function () {
        this.name = "buliangc";
        console.log(this);      // fun函数
        console.log(this.name); // buliangc
    }
}
obj.fun()       // cuggz
new obj.fun()
```
```javascript
var obj = {
    name: 'cuggz',
    fun: function () {
        var name = "buliangc";
        console.log(this);      // fun函数
        console.log(this.name); // undefined
    }
}
obj.fun()       // cuggz
new obj.fun()
```