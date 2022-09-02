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

// 深度优先遍历
// 前中后序遍历
// 根左右
const before_DFS = (root) => {
    console.log(root.val);
}