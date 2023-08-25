/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let power = 1;
    
    while (power < n) {
        power *= 3;
    }
    return power === n;
    
};