// class Queue<T> {
//     private data: Array<T> = [];
//     push(item: T) {
//         return this.data.push(item);
//     }

//     pop(): T {
//         return this.data.shift();
//     }
// }

class Queue4<T> {
    private data: Array<T> = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T | undefined {
        // At runtime shift() should return undefined in case of empty array.
        // That's why, if you want to return T you should tell TS to exclude undefined from resulting type
        // by means of ! operator
        return this.data.shift()!;
    }
}

const queue = new Queue4();
queue.push(1);
queue.pop();
console.log(queue.pop());

let y: number

// y = null		// 无法通过编译
// y = undefined	// 无法通过编译

// y = null!
y = undefined!

console.log(y);


interface KeyPair<T, U> {
    key: T;
    pair: U;
}

let kp1: KeyPair<number, string> = { key: 3, pair: "3" };
let kp2: KeyPair<string, number> = { key: "3", pair: 3 };

let arr1: number[] = [1, 2, 3]
// 使用Array
let arr2: Array<number> = [1, 2, 3]

interface IPlus<T> {
    (a: T, b: T): T
}
function plus(a: number, b: number): number {
    return a + b;
}

const a: IPlus<number> = plus;