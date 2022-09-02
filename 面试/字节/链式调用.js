// u.console("breakfast").setTimeout(3000).console("lunch").setTimeout(3000).console("dinner")

function eat(arg) {
    console.log(arg);
}

function Test() {
    this.queue = [];
    this.console = function (arg) {
        // this.queue.push(eat.bind(this, arg))
        eat(arg);
        return this;
    }
    this.setTimeout = async function (time) {
        await setTimeout(function () {
            // this.queue.forEach(cb => cb());
            return this;
        }, time);

    }
}
class U {
    constructor() {
        this.queue = Promise.resolve()
    }
    console(str) {
        this.queue = this.queue.then(() => {
            console.log(str)
        })
        return this
    }
    setTimeout(wait) {
        this.queue = this.queue.then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, wait)
            })
        })
        return this
    }
}

let u = new U()
console.log(u.console("breakfast"));
