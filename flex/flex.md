# flex 布局

# flex 常用语法
## 弹性容器属性 父元素相关
flex-direction      主轴方向                水平方向(row) row-reverse 垂直方向(column) column-reverse
justify-content     主轴上的对齐方式         开始对齐(flex-start)、结束对齐(flex-end)、居中对齐(center)、两端对齐(space-between左右无间距)、两端对齐(space-around左右有不等间距)、两端对齐(space-evenly左右有相等间距)、靠右对齐(flex-end)
align-items         交叉轴上的对齐方式       开始对齐(flex-start)、结束对齐(flex-end)、居中对齐(center)
flex-wrap           是否换行 默认nowrap


## 弹性元素属性 子元素相关
order:              项目排列顺序 越小越靠前
align-self:         子元素在交叉轴上的对齐方式  开始对齐(flex-start)、结束对齐(flex-end)、居中对齐(center)  (可以覆盖 align-items上的属性) 
flex:           flex-grow    当弹性容器主轴有剩余空间的时候，当前元素放大比例。为0表示不放大，默认为0
                flex-shrink  当弹性容器主轴没有剩余空间的时候，当前元素缩小比例。为0表示不缩小，默认为1
                flex-basis   定义占据项目主轴的尺寸，权重高于宽高  px/%  
                auto 1 1 auto;  none: 0 0 auto;
