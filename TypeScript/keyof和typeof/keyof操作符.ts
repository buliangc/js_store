// 在JavaScript中，使用Object.keys() 来获取对象的键，返回的是键组成的数组
const obj = {
    name: "buliangc",
    age: 18,
    address: {
        province: "安徽省",
        city: "六安市"
    }
}

let key = Object.keys(obj);
let value = Object.values(obj);
console.log(key);
console.log(value);

// 在typescript中，我们面对的是类型，用于获取类型中的所有键。 其返回类型是联合类型
type User = {
    name: string,
    age: number,
    address: {
        province: string,
        city: string
    }
}
// 这里的UserKeys就是所有键的联合类型 
type UserKeys = keyof User;

const myuser = {
    id: 666,
    name: "buliangc"
}

function getProperty<T extends Object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
console.log(getProperty(myuser, "name"));
