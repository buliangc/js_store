function someFun(x) {
    console.log(this);
    this.x = x;
}
someFun(5);
console.log(global.x);

