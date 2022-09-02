# 盒子模型：外边距（margin）+ border（边框） + 内边距（padding）+ content（内容）

1. 标准盒子模型，一般浏览器默认为标准盒子模型。即:box-sizing:content-box

2. 怪异盒子模型，可根据实际项目需要自行设置。即：box-sizing:border-box

box-sizing: border-box;  根据设定的宽高

# margin 合并 
如何解决外边距塌陷问题

# 清除浮动
1. after伪元素清除浮动  使用带clear属性的空元素
```javascript
.clearfix:after {
            display: block;
            content:'';
            clear: both;
            height:0;
        }
```
2. overflow: hidden;
粗暴的总结就是让浮动块包含在同一个BFC中加同时（也可以理解为包含块加属性overflow:hidden）。

3. display: flow-root是官方推荐用法  
浮动导致子元素脱离文档流，父容器高度塌陷。需要父容器开辟bfc让浮动元素参与其bfc
在浮动元素后使用一个空元素如<div class="clear"></div>，并在CSS中赋予 

# 外边距塌陷
1. 垂直方向，不是水平方向
2. 块级元素block，不是行内元素inline，也不是行内块级元素

解决办法：
1. 定位(相对定位/绝对定位)
子绝父相 
绝对定位 可以通过margin-top
相对定位 只能通过top bottom left right来改变自身位置
2. BFC 创建了BFC的元素不会和里面的子元素发生外边距叠加的情况 
创建bfc有4个方法，overflow，float，position，display

# 脱离文档流