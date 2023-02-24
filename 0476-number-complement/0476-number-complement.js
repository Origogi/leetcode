/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let target = 1;
    
    while(target <= num) {
        target = target * 2;
    }
    
    target--;
    
    const ret = target - num;
    
    return ret;
};