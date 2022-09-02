function ajax(url, method) {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.open(method, url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readYstate == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
            }
        }
    })
}

ajax("GET", "1.get.php?username=yyy&age=19&password=123abc").then((data) => {
    // AJAX成功，拿到响应数据
    console.log(data);
}).catch((status) => {
    console.log(`Error${status}`);
})