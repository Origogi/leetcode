/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = {};
    
    for (let i =0;i<s.length;i++) {
        map[s[i]] = (map[s[i]] ? map[s[i]] : 0 ) +1;
    }
    
    let result = 0;
    
    
    const keys = Object.keys(map);
    
    
    for (let i = 0;i<keys.length;i++) {
        const count = map[keys[i]];
        
        if (count % 2 == 0) {
            result += count;
        } else {
            result += (count -1);
        }
    }
    
    let carry = 0;
    
    for (let i = 0;i<keys.length;i++) {
        const count = map[keys[i]];
        
        if (count % 2 == 1) {
            carry =1;
            break;
        }

    }
    
    return result + carry;
    
};