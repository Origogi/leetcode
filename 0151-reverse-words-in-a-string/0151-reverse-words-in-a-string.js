/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s
        .split(' ')
        .filter((w) => w !== '')
        .reduce((acc , w, i) => i === 0 ? w :`${w} ${acc}`, '')
    
   
};