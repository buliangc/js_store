// interface People {
//     age: number;
//     name: string;
// }

// const Jerry: People = {
//     age: 10,
//     name: 'Jerry'
// };
// 这一步会ts检测错误
// const Tom: People = {
//     name: 'Tom'
// }


interface People {
    age: number;
    name: string;
}

const Jerry: People = {
    age: 10,
    name: 'Jerry'
};

type AnonymousPeople = Partial<People>;

const Tom: AnonymousPeople = {
    name: 'Tom'
}
