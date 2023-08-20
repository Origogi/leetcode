/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    let ret = '';
    let tokenLength = 0;
    
    for (let i = s.length - 1;i >=0;i--) {
        const ch = s.charAt(i).toUpperCase();
        
        if (ch ==='-') {
            continue; 
        }
        
        ret = `${ch}${ret}`
        tokenLength++;
        if (tokenLength === k) {
            ret = `-${ret}`
            tokenLength= 0;
        }
    }
    
    
    if (ret.charAt(0) === '-') {
        ret = ret.slice(1)
    }
    
    return ret;
};