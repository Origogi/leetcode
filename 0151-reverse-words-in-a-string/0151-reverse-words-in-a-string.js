/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').filter((s) => s !== '').reduce(
        (acc, token, i) => i === 0 ? token : `${token} ${acc}`,'')
   
};