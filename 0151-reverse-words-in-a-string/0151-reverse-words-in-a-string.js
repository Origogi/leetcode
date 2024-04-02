/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const tokens = s.split(' ').filter((w) => w !== '')
    console.log(tokens)
    return tokens.reverse().join(' ')
   
};