// 使用Object创建二叉树
// const bt = {
//     val: 1,
//     left: {
//         val: 2,
//         left: {
//             val: 4,
//             left: {
//                 val: 8,
//                 left: null,
//                 right: null,
//             },
//             right: null,
//         },
//         right: {
//             val: 5,
//             left: null,
//             right: null,
//         },
//     },
//     right: {
//         val: 3,
//         left: {
//             val: 6,
//             left: null,
//             right: null,
//         },
//         right: {
//             val: 7,
//             left: null,
//             right: null,
//         },
//     }
// }
const bt = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null,
    },
    right: {
        val: 20,
        left: {
            val: 15,
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

// 二叉树的最大深度
var maxDepth = function (root) {
    // 最大深度 深度优先遍历
    if (root === null) {
        return 0
    }
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
};

console.log(maxDepth(bt));
// 二叉树前序遍历
// const preOrder = (root) => {
//     if (!root) return;
//     console.log(root.val);
//     preOrder(root.left);
//     preOrder(root.right);
// }
// // preOrder(bt);

// // 二叉树中序遍历
// const inOrder = (root) => {
//     if (!root) {
//         return;
//     }
//     inOrder(root.left); // 左子树
//     console.log(root.val);  // 根节点
//     inOrder(root.right);    // 右子树
// }
// // inOrder(bt);

// // 二叉树后序遍历
// const postOrder = (root) => {
//     if (!root) return;
//     postOrder(root.left);
//     postOrder(root.right);
//     console.log(root.val);
// }
// // postOrder(bt);


// // 二叉树的前序遍历 根，左，右
// const myPreOrder = (root) => {
//     if (!root) return;  // 如果节点是空，就不用走后面的逻辑
//     console.log(root.val);
//     myPreOrder(root.left);
//     myPreOrder(root.right);

// }

// // myPreOrder(bt);
// // 二叉树的中序遍历
// const myMidOrder = (root) => {
//     if (!root) return;
//     myMidOrder(root.left);
//     console.log(root.val);
//     myMidOrder(root.right);
// }
// // 二叉树的后序遍历
// myMidOrder(bt);
