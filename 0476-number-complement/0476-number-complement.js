/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    
    return num ^ parseInt('1'.repeat(Number(num).toString(2).length), 2);
    
};