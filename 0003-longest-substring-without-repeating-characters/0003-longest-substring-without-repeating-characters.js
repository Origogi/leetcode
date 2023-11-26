/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        
    let ret = 0;
    let temp = '';
    let start = 0;
    
    for (let i = 0;i<s.length;i++) {
        let index = temp.indexOf(s[i]);
        
        if (index !== -1) {
            start = start + index + 1;
        }
        temp = s.substring(start, i +1);
        ret = Math.max(temp.length, ret);
    }

    return ret;
    
};