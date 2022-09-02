//  实现debounce函数(终于来了道秒杀题，分立即执行和延迟执行)

function debounce(fn, wait, immediate) {
    let timer = null
    return function () {
        let context = this
        let args = arguments
        if (timer) clearTimeout(timer)
        if (immediate) {
            let call = !timer
            timer = setTimeout(() => {
                timer = null
            }, wait)
            if (call) fn.apply(context, args)
        } else {
            setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, wait)
        }
    }
}