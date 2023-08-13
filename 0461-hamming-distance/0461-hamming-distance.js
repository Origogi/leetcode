/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let _xor = x ^ y;
    let ret = 0;
    
    for (let i = 0;i< 32;i++) {

        if ((1 & _xor) === 1) {
            ret++;
        }
        _xor >>= 1;
    }
    return ret;
};