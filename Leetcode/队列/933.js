// light attracts bugs
var RecentCounter = function () {
    this.q = [];
}

RecentCounter.prototype.ping = function (t) {
    this.q.push(t);
    while (this.q[0] < t - 3000) {
        this.q.shift()
    }
    return this.q.length;
}
// 队列 先进先出 push shift
var recentCounter = new RecentCounter();
console.log(recentCounter.ping(0));    // requests = [1]，范围是 [-2999,1]，返回 1
console.log(recentCounter.ping(100));    // requests = [<u>1</u>, <u>100</u>]，范围是 [-2900,100]，返回 2
console.log(recentCounter.ping(3001));  // requests = [<u>1</u>, <u>100</u>, <u>3001</u>]，范围是 [1,3001]，返回 3
console.log(recentCounter.ping(3002));  // requests = [1, <u>100</u>, <u>3001</u>, <u>3002</u>]，范围是 [2,3002]，返回 3
