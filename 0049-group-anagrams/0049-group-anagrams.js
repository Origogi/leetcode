/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    
    for (var i = 0; i < strs.length;i++) {
        const key = sortText(strs[i]);
        const value = map[key] ?? [];
        value.push(strs[i]);
        map[key] = value;
    }
    
    
         
    return Object.values(map);
};

function sortText(text) {
    return text.split('').sort().join('');
};