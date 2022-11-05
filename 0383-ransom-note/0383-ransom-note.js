/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    const obj = {};
    
    for (let i = 0;i<magazine.length;i++) {
        obj[magazine[i]] = ( obj[magazine[i]] ?  obj[magazine[i]] : 0) + 1;
    }
    
    for (let i = 0;i<ransomNote.length;i++) {
        if (!obj[ransomNote[i]]) {
            return false;
        }
        obj[ransomNote[i]] = obj[ransomNote[i]] - 1;
    }
    return true;
    
};