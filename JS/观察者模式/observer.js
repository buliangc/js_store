// 观察者模式
class Observered {
    constructor(name) {
        this.name = name;
        this.state = 'happy';
        this.observers = [];
    }
    setObserver(observer) {
        this.observers.push(observer);
    }
    setState(newState) {
        this.state = newState || this.state;
        this.observers.forEach(observer => {
            observer.update(this);
        })
    }
}
class Observer {
    constructor(name) {
        this.name = name;
    }
    update(observer) {
        console.log(`观察者：${this.name} 发现 被观察者${observer.name} 现在很${observer.state}`);
    }
}

let sub = new Observered('Child');
let o1 = new Observer('Father');
let o2 = new Observer('Mother');
sub.setObserver(o1);
sub.setObserver(o2);
sub.setState();
sub.setState("sad");