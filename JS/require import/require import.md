# require和import的区别
## import 属于静态加载 import属于动态加载
1. import在代码编译时被加载，所以必须放在文件开头，require在代码运行时被加载，所以require理论上可以运用在代码的任何地方，所以import性能更好。

2. ES Module 静态引入 import有利于tree-shaking（移除JavaScript上下文中未引用的代码），动态引入 require对tree-shaking不友好。
（其实我们可以使用require的方式，动态的引入css样式，从而避免被tree shaking摇掉。require('./style.css')）

3. import是es6的一个语法标准，如果要兼容浏览器的话必须转化成es5的语法，require 是 AMD规范引入方式。

