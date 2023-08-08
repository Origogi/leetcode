/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    
    while(n > 1) {
        console.log(n);
        if (n % 4 !== 0) {
            return false;
        }
        n = parseInt(n /4);
    }
    return n === 1;
    
};