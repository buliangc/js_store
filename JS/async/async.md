// 无数then 只需要在末尾加上catch捕获错误即可
// async会返回一个promise对象 await会直接返回结果
fetch会返回一个promise对象
fetch('coffee.jpg')
.then(response => response.blob())
.then(myBlob => {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(e => {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});

async function myFetch() {
    let response = await fetch("coffee.jpg");
    let myBolb = await resopnse.
}