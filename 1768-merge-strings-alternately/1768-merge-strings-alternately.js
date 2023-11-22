/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let flag = true;
    
    let i = 0;
    let j = 0;
    let ret = '';
    
    while (i + j < word1.length + word2.length) {
        if (flag) {
            ret = `${ret}${word1[i]}`;
            i++;
        } else {
            ret = `${ret}${word2[j]}`;
            j++;
        }
        
        if ((flag && word2[j]) || (!flag && word1[i])) {
            flag = !flag;
        }
    }
    
    return ret;
    
};