# 将小的js合并为大的js，以此来减少请求次数

webpack构建流程
webpack从入口文件开始 ，递归查找内部依赖的module，根据module内部rule配置的module Loader。进行相应转换，解析的结果是一个个chunk，最后webpack会将所有的chunk转换为output。在整个webpack过程中，会在恰当时机执行plugin。

loader相当于一个转换器 plugin相当于一个扩展器
[常用loader]
bable-loader
url-loader
style-loader
css-loader
postcss-loader: 解决浏览器兼容性问题，自动加上[有问题:网页上无法显示-webkit厂商前缀]
file-loader


[常用plugin]
html-webpack-plugin: 生成html文件
clearWebpackplugin：清除dist目录
hotModulePlugin：热加载

[优化]
tree-shaking => sideEffects
代码压缩 js/css
代码分割 

入口文件

module模块
plugin插件

出口文件
