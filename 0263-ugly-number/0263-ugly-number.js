/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    return check(n);
};

function check(n) {
    const prime = [ 2, 3, 5];
    
    if (n ===0 ) {
        return false;
    }
    
    
    for (let i= 0;i<prime.length;i++) {
        if (n % prime[i] === 0) {
            return check(n / prime[i]);
        }
    }
    
    return n === 1;
    
}