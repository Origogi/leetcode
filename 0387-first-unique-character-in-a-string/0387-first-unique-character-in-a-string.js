/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = {};
    
    for (let i = 0;i<s.length;i++) {
        map[s[i]] = (map[s[i]] === undefined ? 0 : map[s[i]]) + 1;
    }
    
    const entries = Object.entries(map);
    
    let targetKey;
    
    for (let i = 0; i < entries.length;i++) {
        if (entries[i][1] === 1) {
            targetKey = entries[i][0];
            break;
        }
    }
    
    
    for (let i = 0;i<s.length;i++) {
        if (targetKey === s[i]) {
            return i;
        }
    }    

    return -1;
};