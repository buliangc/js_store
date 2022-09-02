let obj = {
    name: "buliangc",
    getName: function () {
        console.log(this.name)
    }
}
let p = obj.getName;    // 间接调用
p();