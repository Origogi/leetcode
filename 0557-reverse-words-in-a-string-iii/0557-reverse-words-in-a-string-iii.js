/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ret = '';
    
    return s.split(' ')
        .map(reverse)
        .join(' ');
    
    
};

function reverse(word) {
    let ret = '';
    
    for (let i = 0;i<word.length;i++) {
        ret = `${word.charAt(i)}${ret}`;
    }
    return ret;
}