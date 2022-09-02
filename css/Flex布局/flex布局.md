# flex布局
https://zhuanlan.zhihu.com/p/39052660 
采用flex布局的元素称为[Flex容器]，它的所有子元素称为容器成员，称为[Flex-item];
[Flex容器]默认两根轴：主轴- 和 交叉轴|  

# [Flex容器]有六个属性：
1. flex-direction:决定主轴方向 
2. flex-wrap:使**弹性项目**在需要时换行：
flex布局妙的地方在于他可以将，如果[Flex-item]的宽度或者高度小于主轴的大小的时候，子元素的宽度和高度会照旧。如果总共的宽高大于主轴的大小，会进行弹性布局。全部挤在[Flex容器]中。
3. flex-flow: flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```javascript
<style>
#box{
    width:50px;
    height:50px;
    display:flex;
    flex-direction: raw/column // 行和列 
    flex-wrap: nowrap // 不换行(默认)
}
#item{  // 三个item
    width: 20px;
    height: 20px;
}
</style>
```
[根据主轴来判断，主轴如果是column，justify-content永远是对应主轴的,align-items永远是对应交叉轴的]
4. justify-content: 定义了在主轴上的对齐方式  flex-start | flex-end | center | space-between | space-around;
space-between 最左、最右item贴合左侧或右侧边框，item与item之间间距相等。
space-around 每个item 左右方向的margin相等。两个item中间的间距会比较大

5. align-items: 定义了在交叉轴上的对齐方式 flex-start | flex-end | center | stretch | baseline

6. align-content: align-content 属性修改 flex-wrap 属性的行为。它与 align-items 相似，但是它不对齐弹性项目，而是对齐弹性线。
flex-start: 多行都集中在顶部。
flex-end: 多行都集中在底部。
center: 多行居中。
space-between: 行与行之间保持相等距离。
space-around: 每行的周围保持相等距离。
stretch: 每一行都被拉伸以填满容器。
[注意]：必须有多行项目，此属性才能生效！

# [Flen-item]项目的属性
1. order:  order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。 只适用于弹性项目
2. flex-grow属性 用来“瓜分”父项的“剩余空间”。
剩余空间 = 总Flex容器大小 - 基础空间的大小 将剩余的空间按照flex-grow进行划分多少份，然后再看每个占多少份。
加起来等于总共的基础空间。
flex-grow: 0(未设置默认为0)
3. flex-shrink属性 用来“吸收”超出的空间 
(自身width) * 1(flex-shrink) * (自身width) / (总弹性容器width)
flex-shrink: 1(未设置默认为1)
4. flex-basis属性：flex-basis 如果设置默认是auto，子项占用的宽度使用width 的宽度，width没设置也为auto，所以子项占用空间由内容决定。
如果flex-basis 设定了固定值，就会覆盖width 的宽度。
5. flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
6. align-self属性


