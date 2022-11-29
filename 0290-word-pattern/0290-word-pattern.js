/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    const tokens = s.split(' ');
    
    if (pattern.length !== tokens.length) {
        return false;
    }
    
    const map1 = {};
    const map2 = {};

    
    for (var i =0;i<pattern.length;i++) {
        map1[pattern[i]] = tokens[i];
        map2[tokens[i]] = pattern[i];
    }
    
    for (var i =0;i<pattern.length;i++) {
        if (map1[pattern[i]] !== tokens[i] 
            || map2[tokens[i]] !== pattern[i]) {
            return false;
        }
    }
    
    return true;
};