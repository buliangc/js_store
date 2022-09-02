# 创建一个ajax请求
1. 实例化一个XMLHttpRequest对象。xhr
2. xhr具有一个open方法，这个方法类似于初始化，并不会发起真正的请求
3. 进行readyState监听
4. 发送请求xhr.send(null),get请求直接null

关于其中的跨域问题
目前主要有下面几种方式：
1. cors后台设置请求头为允许所有请求
2. jsonp格式请求
3. 设置代理proxy