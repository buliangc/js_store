// 实现一个观察者模式

class Subject {
    constructor() {
        this.state = "开心";
        this.observerList = [];
    }
    // 添加观察者
    obser(observer) {
        this.observerList.push(observer);
    }
    // 改变状态并通知观察者 调用观察者的方法
    setState(state) {
        this.state = state;
        this.observerList.forEach(item => {
            item.watching(this);
        })
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    watching(subject) {
        console.log(this.name + " 正在观察小宝宝的状态：" + subject.state);
    }
}

let baby = new Subject("宝宝");
let father = new Observer("父亲");
let mather = new Observer("母亲");

baby.obser(father);
baby.obser(mather);

baby.setState("不开心")
