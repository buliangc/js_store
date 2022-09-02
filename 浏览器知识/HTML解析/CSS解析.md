CSS 不会阻塞 DOM 的解析,因为CSS和HTML是并行解析的。
但是CSS会阻塞 DOM 的渲染，因为Render树的构建必须等待CSSOM树构建完成。
CSS其实会间接影响DOM的构建，因为js的执行要在CSSOM构建完成之后，而DOM的构建要在js执行之后

css 通过 link 的方式，css会阻塞页面的渲染，但不会阻塞 DOM 的解析。css 会阻塞 js 的执行，因为 js 会影响样式，js 的执行会依赖一些 css 的属性，如果 css 没有加载完，可能会有问题。