# 问：虚拟DOM是什么
vdom本质是一个js对象，用来模拟真实DOM树上面每一个节点
通常包含了type类型属性，props属性，children属性，className属性，id属性

# 优点：
1. 可以有效避免操作真实DOM，减少回流和重绘，提高性能
2. react借助Vdom，实现跨平台的能力（React Native）
3. 解析js速度快

缺点： 
首次渲染的时候，会多一层虚拟DOM的计算

# 虚拟DOM的diff算法
diff算法主要用于找出两个虚拟DOM树的区别。在reconcile中，找到需要更新的最小操作，然后提交给渲染器render。

tree diff
同级比较，不会跨层级比较，只有删除和创建操作。

component diff
如果是同一个类的组件，type会显示组件，会继续往下进行tree diff。如果不同直接删除创建新的

element diff
当节点处于同一层级时，key帮助同一层级的元素的识别

tree diff和component diff可以看做包含与被包含的关系
- tree diff是全局性质的比较，不看具体组件类型。只有删除和创建两个操作。
- component diff会比较type类型，相同的话，继续tree diff；如果不是同一类型的组件，则将其判断为dirty component，从而替换整个组价下的所有子节点。删除，重建。
- element diff，用于比较同一层级的元素：diff提供三种操作：插入，[移动--key]，删除