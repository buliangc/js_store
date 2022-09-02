// // ^ 表示字符串开始
// const reg = /^\d/;
// console.log('reg', reg.test('a123456'));
// // $ 表示字符串结束
// const reg1 = /\d$/
// console.log('reg1', reg1.test('abcd1'));
// // ^\d$ 只能有一个数字
// const reg2 = /^\d$/;
// console.log('reg2', reg2.test('5'));

// // 限定元字符 写在普通元字符或者字母符号的后面
// /**
//  *  1. * 表示你的字符串里面需要出现一个0~多个数字组成的片段
//  *  2. + 表示你的字符串只能由1~多个组成
//  *  3. ？表示你的字符串只能由0 或者 1 个组成
//  *  4. {n} 表示出现n次
//  *  5. {n,} 表示出现n~多个组成
//  *  6. {n, m} 表示出现n~m 个组成
//  */
// const reg3 = /^\d*$/;
// console.log('reg3', reg3.test(''));

// const reg4 = /^\d+$/;
// console.log('reg4', reg4.test(''));

// const reg5 = /^\d?$/;
// console.log('reg5', reg5.test('12'));

// const reg6 = /^\d{3}$/;
// console.log('reg6', reg6.test('123'));


// // 正则的贪婪性和非贪婪性
// /** 
//  *  贪婪性：
//  *  + 当给你一个符号使用限定符的时候
//  *  + 在你捕获的时候，他会尽可能多的去捕获内容
//  *  + 我们管这个特性叫做正则的贪婪性
//  *  
//  *  非贪婪性 限定符？
//  *  + 正则在捕获的时候尽可能的按照最小值来进行捕获
//  *  + 写限定符的时候，在后面多加一个?
//  */

// const reg7 = /\d*/
// console.log('reg7', reg7.exec('asdf123456sdf'));

// const reg8 = /\d{3,6}?/
// console.log('reg8', reg8.exec('asdf123456sdf'));

// // eg: 捕获一个一段html结构的字符串 <div><span></span></div>
// const reg9 = /<.+?>/;
// console.log(reg9.exec('<div style=""><span></span></div>'));

// // 特殊字符
// /**
//  * 1.()
//  * 表示一个整体
//  * 从左到右一次数小括号的开始括号
//  * 2.(?:)
//  * 整体匹配但不捕获
//  * 只是标志一个整体，但是捕获的时候不会单独捕获出来
//  * 3.| 占位或
//  * 表示左边或者右边都行
//  * 大部分的时候用()连用，表示一个整体或者一个整体
//  * 注意：或分开的是左边和右边的整个
//  * 4. [] 中括号
//  * 注意：**一个[]占一个字符的位置
//  * 表示括号中的字符串只要有一个即可
//  * 5.[^]
//  * 注意：一个[^]占一个字符位置
//  * 表示非里面的任意一个都可以
//  * 6. - 
//  * 表示 至 或者 到的意思
//  * 是使用在[]里面的一个符号
//  */

// const reg10 = /^ab(c|d)ef$/;
// const reg11 = /^abc|def$/;
// console.log(reg10.test('abcef'));
// console.log(reg11.test('def'));

// const reg12 = /[abcd]/;
// console.log(reg12.test('a'));

// const reg13 = /^[^abcd]+$/;
// console.log(reg13.test('fs'));

// // 表示一个字符组成，可以是从0到9的任意数字
// const reg14 = /^[0-9]$/;
// console.log(reg14.test('8'));
// // 验证一个字符串，智能由数字字母下换线组成，6到12位，不能以_开头
// // 因为[]占用一个字符，所以只能是5到11位
// const reg15 = /^[^_][0-9a-zA-Z_]{5,11}$/;
// // const reg15 = /^[^_][0-9a-zA-Z_]{5,11}$/;
// console.log(reg15.test('123456789abc'));

// // 正则验证数字范围
// // 验证0~255

// const reg16 = /^[0-9]$/;
// console.log(reg16.test(9));

// // 正则表达式的预查
// const reg17 = /^$/
// console.log();


// // eg: 邮箱匹配
// const reg18 = /^[^_][0-9a-zA-Z]{5,10}@(qq|163|sina)(.com|.cn)$/;
// console.log(reg18.test('1610696542@qq.com'));

// var str = '\s';
// console.log(str);

// var reg = new RegExp('\\s\\d\\w');
// console.log(reg.test(' 0s'));

// 捕获一段字符串里面所有的三位数
// var str = 'sdfsdf123asdfsdf456wetwet897wqer456';
// var reg = /\d{3}/g;
// var res = [];
// var temp = reg.exec(str);
// while (temp != null) {
//     res.push(temp[0]);
//     temp = reg.exec(str);
// }
// console.log(res);

// // 全局替换
// console.log(str.replace(reg, '**'));

// var reg = /^\d{3}[4]+$/
// console.log(reg.test('1234444'));

// console.log([] == []);
// console.log(typeof null);
// console.log(3 === '3');

//数字改变（加万位）
// num为传入的值，n为保留的小数位
// 来摊平字符串：  输入：3(x)2(yz)1(x)   输出：xxxyzyzx
// 3(x)2(yz2(az))1(x) 
function formatStr(str) {
    const reg = /\d+/g;
    const reg1 = /[a-z]+/g;
    let arr = str.match(reg);
    let arr1 = str.match(reg1);
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = arr1[i].repeat(Number(arr[i]));
    }
    console.log(res.join(''));
}

formatStr("3(x)2(yz)1(x)")
formatStr("3(x)2(yz2(az))1(x)")
