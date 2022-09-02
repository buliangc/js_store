// 将数组转换为链表 leetcode将无序数组 转化为 有序链表  23. 合并K个升序链表
let arr = [1, 2, 3, 4, 5, 6];
const newList = new ListNode(0);        // 定义一个虚拟头结点
let p = newList;
arr.forEach(item => {
    p.next = new ListNode(item);
    p = p.next;
})
return newList.next;
