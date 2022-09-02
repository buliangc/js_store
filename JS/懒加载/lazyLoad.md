图片懒加载的两种手段：
1. 监听 滚动事件"scroll"  image.getBoundingClientRect().top < window.innerHeight图片是否出现在可视区
2. IntersectionObserver()
const callback = (entires) => {
            console.log(entires);
            entires.forEach(entire => {
                if (entire.isIntersecting) {
                    entire.target.setAttribute("src", entire.target.getAttribute("data-src"));
                    observer.unobserve(entire.target)
                    console.log("触发");
                }
            })
        }
        const observer = new IntersectionObserver(callback);
        images.forEach(image => {
            observer.observe(image);
            // 
        })