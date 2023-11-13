
var MinStack = function() {
    this._array = [];
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this._array.push({
        val,
        min : this._array.length ? Math.min(this.getMin(), val) : val
    });
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this._array.pop().val;

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._array[this._array.length -1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._array[this._array.length -1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */