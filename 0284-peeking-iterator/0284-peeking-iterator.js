/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this._it = iterator;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if (!this._peek) {
        this._peek = this._it.next();
    }

    return this._peek;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    let ret;
    
    if (this._peek) {
        ret = this._peek;

    } else {
        ret = this._it.next();
    }
    
    this._peek = undefined;

    
    
    return ret;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    return this._peek !== undefined || this._it.hasNext();
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */