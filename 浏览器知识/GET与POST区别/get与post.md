# Get与Post的区别：
[缓存]
Get请求的资源会被浏览器主动被缓存，而Post不会，除非手动设置。
[请求参数位置]
Get请求的参数传递使用URL
axios请求：
params 是get请求会把参数放到 url 中
data 是post请求会把参数添加到请求体(body)中
[请求URL长度限制]
GET请求在URL中传送的参数是有长度限制的，而POST没有。
[编码方式]
GET请求只能进行url编码，而POST支持多种编码方式。
[安全]
POST比GET相对安全，因为数据在地址栏上不可见

