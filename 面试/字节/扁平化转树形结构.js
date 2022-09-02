// 扁平数组转化为树状 
// 用id、pid来标识父子关系
let input = [
    { pid: 0, id: 1, name: "中国" },
    { pid: 1, id: 2, name: "广东" },
    { pid: 2, id: 3, name: "深圳" },
    { pid: 3, id: 6, name: "福田" },
    { pid: 1, id: 4, name: "香港" },
    { pid: 4, id: 5, name: "九龙" },
];

function arrTotree(arr) {
    const tree = [];
    const map = {};
    arr.forEach(item => {
        map[item.id] = item;
    });
    console.log(map);
    arr.forEach(item => {
        if (map[item.pid]) {
            map[item.pid].children ? map[item.pid].children.push(item) : map[item.pid].children = [item]
        } else {
            tree.push(item);
        }
        Reflect.deleteProperty(item, "pid");
    });
    console.log(tree);
}

arrTotree(input);

// function listToTree(list) {
//     var map = {}, node, tree = [], i;
//     for (i = 0; i < list.length; i++) {
//         map[list[i].id] = list[i];
//         list[i].children = [];
//     }
//     for (i = 0; i < list.length; i += 1) {
//         node = list[i];
//         if (node.pid !== '-1') {
//             map[node.pid].children.push(node);
//         } else {
//             tree.push(node);
//         }
//     }
//     return tree;
// }

// console.log(listToTree(arr));

// let input = [
//     { pid: 0, id: 1, name: "中国" },
//     { pid: 1, id: 2, name: "广东" },
//     { pid: 2, id: 3, name: "深圳" },
//     { pid: 3, id: 6, name: "福田" },
//     { pid: 1, id: 4, name: "香港" },
//     { pid: 4, id: 5, name: "九龙" },
// ];
// var arr = [{ id: 11, pid: '1' }, { id: 1, pid: '-1' }, { id: 12, pid: '1' }]

// let parser = (arr) => {
//     let map = {};
//     let output = [];
//     arr.forEach((item) => {
//         map[item.id] = item;
//     });
//     console.log(map);
//     arr.forEach((item) => {
//         if (!map[item.pid]) {
//             output.push(item);
//         } else {
//             map[item.pid].children
//                 ? map[item.pid].children.push(item)
//                 : (map[item.pid].children = [item]);
//         }
//         Reflect.deleteProperty(item, 'pid');
//     });
//     console.log(output);
//     return output;
// };
// parser(arr);