/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    const remain = n % 4;
    
    return remain > 0;
};