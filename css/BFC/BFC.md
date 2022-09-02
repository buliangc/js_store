Block formatting context 块级格式化上下文 形成独立的渲染区域 内部元素的渲染不会影响外界
BFC解决高度塌陷，外边距重叠，清除浮动等
当元素拥有了BFC属性的时候，这个元素就可以看做是隔离了的独立容器，容器里面的元素不会在布局上影响外面的元素。

# 如何触发BFC
1. html body标签根元素肯定是一个formatting context  所以块级元素才能占一行
2. 不在正常流里面，并且它的里面可以包含文字 table-cell table-caption  (三点归为一点)
float: right/left
position: absolute/fixed
display: inline-block table
3. overflow除了visible以外的值（hidden auto scroll）

# BFC的作用
1. 外边距折叠 margin-top 与 margin-bottom 两者重叠，取最大的值
2. 外边距塌陷问题 子元素设置margin-top，会将父元素的margin-top也一并带下去
3. 清除浮动
4. 标准流盒子不被决div浮动造成的遮盖
