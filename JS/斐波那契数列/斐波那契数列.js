function febonacci(n) {
    if (n == 1) {
        return 0;
    }
    if (n <= 3) {
        return 1;
    }
    return febonacci(n - 2) + febonacci(n - 1);
}

console.log(febonacci(6));