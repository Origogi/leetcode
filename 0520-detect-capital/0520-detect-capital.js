/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length === 1) {
        return true;
    }
    
    for (var i = 1;i<word.length -1;i++) {
        if (isCapital(word[i]) !== isCapital(word[i + 1])) {
            return false;
        }
    }
    
    if (!isCapital(word[0]) && isCapital(word[1])) {
        return false;
    }
    
    
    return true;
};

function isCapital(c) {
    return c === c.toUpperCase();
}