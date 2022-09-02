const tree = {
    val: 'a',   // 根节点
    children: [
        {
            val: 'b',
            children: [
                {
                    val: 'd',
                    children: []
                },
                {
                    val: 'e',
                    children: []
                }
            ]
        },
        {
            val: 'c',
            children: [
                {
                    val: 'f',
                    children: []
                },
                {
                    val: 'g',
                    children: []
                }
            ]
        }
    ]
}

// 首先深度优先
// 通过递归 根节点
const dfs = (root) => {
    console.log(root.val);
    root.children.forEach((child) => {
        dfs(child);
    })
}

// dfs(tree);

// 广度优先
// 通过队列
// 首先将队头入栈
// 出栈
const bfs = (root) => {
    const queue = [root];
    // console.log(queue.shift());
    while (queue.length) {
        const h = queue.shift();
        console.log(h.val);
        h.children.forEach(child => {
            queue.push(child);
        })
    }
}
// bfs(tree);

// 二叉树深度广度优先遍历
// 深度优先遍历 
const dfs2 = (root) => {
    console.log(root.val);  // 根节点
    console.log(root.children); // 子节点为空数组的话，forEach不会执行
    root.children.forEach((child) => {
        dfs2(child);
    })
}
// dfs2(tree);

// 广度优先遍历
// 使用队列
const bfs2 = (root) => {
    const queue = [root];
    while (queue.length) {
        const head = queue.shift();   // 先进先出 出队
        console.log(head.val);
        head.children.forEach((child) => {
            queue.push(child);
        })
    }
}

bfs2(tree);

