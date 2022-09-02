// 使用Object创建二叉树
const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null,
        },
        right: {
            val: 5,
            left: null,
            right: null,
        },
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        },
    }
}
// 非递归版 前序遍历
const preOrder = (root) => {
    if (!root) return;
    const stack = [root];
    while (stack.length) {
        const head = stack.pop();
        console.log(head.val);
        if (head.right) stack.push(head.right);
        if (head.left) stack.push(head.left);
    }
}

// preOrder(bt);

// 非递归版 中序遍历
const minOrder = (root) => {
    if (!root) return;
    const stack = [];
    let p = root;   // 指针
    while (p) {
        stack.push(p);
        p = p.left;
    }
    console.log(stack);
    const n = stack.pop();  // 出栈
    console.log(n.val);
    p = n.right;

}

minOrder(bt);