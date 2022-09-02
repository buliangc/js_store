const lolo = {
    name: "lolo",
    age: 7,
    address: {
        province: "福建",
        city: "厦门"
    }
}


type Person3 = {
    name: string;
    age: number;
}

let man: Person3 = {
    name: "Semlinker",
    age: 30
}

type Human = typeof man;


type Todo = {
    id: number;
    text: string;
    done: boolean;
}

const todo: Todo = {
    id: 1,
    text: "Learn TypeScript keyof",
    done: false
}

function prop<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const id = prop(todo, "id"); // const id: number
const text = prop(todo, "text"); // const text: string
const done = prop(todo, "done"); // const done: boolean
console.log(id);

