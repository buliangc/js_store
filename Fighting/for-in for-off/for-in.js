// for in用于遍历对象
let obj = {
    name: "buliangc",
    age: 18
}

for (const key of obj) {
    console.log(key);
    // if (Object.hasOwnProperty.call(obj, key)) {
    //     const element = obj[key];
    //     console.log(element);
    // }
}