# TypeScript 中 interface 可以给 Function / Array / Class（Indexable）做声明吗？

/* 可以 */
// 函数声明
interface Say {
 (name: string): viod;
}
let say: Say = (name: string):viod => {}

// Array 声明
interface NumberArray { 
 [index: number]: number; 
} 
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// Class 声明
interface PersonalIntl {
 name: string
 sayHi (name: string): string
}
