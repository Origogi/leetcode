/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    var i = 0;
    
    for (var j = 0;j < t.length;j++) {
        if (s[i] === t[j]) {
            i++;
        }
        if (i === s.length) {
            break;
        }
    }
    
    
    return i === s.length;
};