// ajax
// function myAjax(url, method = "post", async = false) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(url, method, async);
//         xhr.onload = () => {
//             if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//                 console.log(xhr.responseText);
//                 resolve(xhr.responseText);
//             } else {
//                 console.log("Error:" + xhr.status);
//                 reject(xhr.status)
//             }
//         };
//         xhr.send();
//     })
// 
function myAjax(url, method = "post", async, data = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(url, method, async);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                resolve(xhr.responseText);
            } else {
                reject("Error" + xhr.status);
            }
        }
        xhr.send(data);
    })
}












