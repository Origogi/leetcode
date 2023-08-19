/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    let flag = true;
    let count = 0;
    for (let i = 0;i<s.length;i++) {
        if (s.charAt(i) === ' ') {
            flag = true;
        }
        else if (flag) {
            count++;
            flag = false;
        }
        
    }
    return count;
};