var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(x) {
    let prev = this.getMin();
    let min = prev !== null ? Math.min(x, prev) : x;
    this.stack.push({ val: x, min });
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length - 1].val : null;
};

MinStack.prototype.getMin = function() {
    return this.stack.length ? this.stack[this.stack.length - 1].min : null;
};

const st = new MinStack();
console.log(st)
st.push(2);
console.log(st)
st.push(1);
console.log(st)
st.push(0);
console.log(st)
st.pop();
console.log(st)
