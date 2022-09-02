// const express = require('express');
// const app = express();
// const fs = require('fs')

// async function getFileData(url,req, res) {
//     let p = new Promise((resolve,reject) => {
//         fs.readFile(url, 'utf8',(err, data) => {
//             if(err){
//                 reject(err);
//             }else {
//                 data = JSON.parse(data);
//                 resolve(data);
//             }
//         })
//     });

//     try {
//         const data = await p;
//         console.log(data);
//         res.json({
//             state: 'success',
//             data: data.name,
//         })
//     }catch(e) {
//         console.log(e);
//         res.json({
//             state: 'err',
//         }) 
//     }
// }

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     next();
// })

// app.get('/', (req, res) => {
//     getFileData('./test.txt',req, res);
// })

// app.listen(8000,() => {
//     console.log('server open');
// })
const express = require('express');
let app = new express();
// const router = express.Router();

//应用级中间件  设置请求头  处理cros跨域
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})
//路由模块
//渲染首页html
app.get('/', (req, res, next) => {
    res.json({
        state: 'success',
        data: 'buliangc',
    })
});

// app.use(router);
//错误中间件
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.send("错误");
})
app.listen(8000, 'localhost', () => {
    console.log("服务器运行在：http://localhost:8000");
})
