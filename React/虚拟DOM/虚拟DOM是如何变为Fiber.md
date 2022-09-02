# 虚拟DOM 
JSX会被babel编译为React.createElement(); 这个函数产生的就是平时说的虚拟DOM，他是个树形结构。
{
    $$typeof: Symbol(react.element)
    type: "div",
    key:
    props: {
        className: "",
        id: "",
        children: []
    }
}
我们通过协调器（Reconciler）[首次构建时会把这个虚拟DOM的结构深度优先遍历的方式来形成一个链表结构的fiber树]。
FiberNode: {
    child: FiberNode{}  // 子节点
    sibling: null ,     // 兄弟节点
    return: FiberNode{} // 父节点
}

我们可以看到每个节点有child和return及sibling属性，通过这些属性我们可以把他们串联成一个链表方便循环。

