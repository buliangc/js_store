# Flex小结
Flex弹性布局，首先得确定好主轴的方向flex-direction(row column row-reverse column-reverse)，因为[Flex容器]的属性都是根据主轴的方向来变化的，justify-content和align-items。同时可以设置是否对弹性项目[Flex-item]进行换行，通过flex-wrap进行设置，默认是不换行。align-content针对多行[Flex-item]进行设置，将多行内容当做整体，flex-start就是将多行item进行顶格设置。flex-flow可以同时设置flex-direction和flex-wrap;

对于[Flex-item]项目，order用于设置优先级，order越小越靠前，默认为0
flex: flex-grow flex-shrink flex-basic
flex-grow默认为0 flex-shrink默认为1 **[元素默认就是收缩的]**
align-self设置自身