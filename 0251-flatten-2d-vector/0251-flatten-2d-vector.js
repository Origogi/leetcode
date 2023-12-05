/**
 * @param {number[][]} vec
 */
var Vector2D = function(vec) {
        
    this._array = vec.reduce((acc, v) => [...acc, ...v, ], []);
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
    const next = this._array.shift();
    return next;
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
    return this._array.length > 0;
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(vec)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */