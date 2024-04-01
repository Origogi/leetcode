/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const minLength = Math.min(word1.length, word2.length)
    
    let ret = ''
    for (let i = 0;i<minLength;i++ ) {
        ret = `${ret}${word1.charAt(i)}${word2.charAt(i)}`
    }
    
    if (word1.length > minLength) {
        ret =`${ret}${word1.substring(minLength)}`
    } else if (word2.length > minLength) {
        ret = `${ret}${word2.substring(minLength)}`
    }
    return ret
    
    
    
};

