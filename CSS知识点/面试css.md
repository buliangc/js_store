# css选择器权重，伪类 伪元素
!important	
内联样式	
id选择器	
类、伪类、属性选择器	
元素选择器、伪元素选择器	
通用选择器，子选择器，相邻同胞选择器	
# 三栏布局  两栏布局

# 重绘重排
1、页面首次渲染 2、添加或者删除可见的DOM元素 3、元素位置改变； 4、元素尺寸改变——边距、填充、边框、高度和宽度 5、内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变 6、浏览器窗口尺寸改变——resize事件发生时
什么是重绘？ 只是样式的变化，不会引起DOM树变化，页面布局变化的行为叫重绘，且重绘不一定会便随回流。
如何减少回流、重绘：本质就是减少DOM的操作
1. 不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好css的 class，然后修改 DOM 的 className。
```javascript
    var p= document. getElementsByTagName("p")[0];
    p.style.backgroundColor=red;
    p style.width= "300px";
    p style.height="300px";

    var p= document.getElementsByTagName("p")[0];
    p.className="square";
```
2. transform 替代 top 、transform没有回流  visibility 代替 display:none
3. 不要把节点的属性值放在一个循环里当成循环里的变量
4. 不要使用table布局
5. 让要操作的元素进行“离线处理”，处理完后一起更新。(目前看来有问题)当使用DocumentFragment进行缓存操作，引发一次回流和重绘
6. 让元素脱离动画流，减少render 树的规模  绝对定位

# 垂直居中（开始说的都是改变父元素样式的，然后面试官对父元素不设置高度设置padding上下相等有些疑问，演示了一下。追问有没有不改变父元素样式的方法）
1. flex布局
2. absolute + transform: translateY(50%)/margin auto
3. 

# CSS盒模型 box-sizing: content-box border-box padding-box

# flex布局（要求想起来的都说）
父元素 子元素 flex:1
# 渲染的原理（不会）

# BFC（说了overflow:hidden）

# display:none和visibility:hidden区别
不占位，继承性 但影响子元素 display:none 引起页面重绘和回流
占位 visiblity:hidden 只引起页面重绘
# BFC

# font-size有什么单位
- px 绝对长度单位
- em 相对长度单位 (相对于父元素) 
- rem 相对长度单位 ( = 16px 在根元素设置 html{})
# flex:1的含义

# less 比 CSS 扩充哪些功能

# 浮动 怎么清除浮动 为啥清除要写在标签的后边

# css3 的新特性 说了 animation 和translate 以及两者之间的区别

# 事件委托
事件委托，通俗地来讲，就是把一个元素响应事件（click、keydown......）的函数委托到另一个元素；
一般来讲，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，当事件响应到需要绑定的元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数。
