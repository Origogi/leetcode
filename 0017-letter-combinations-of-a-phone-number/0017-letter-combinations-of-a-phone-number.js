/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = {
        2 : ['a','b','c'],
        3 : ['d', 'e', 'f'],
        4 : ['g', 'h', 'i'],
        5 : ['j', 'k', 'l'],
        6 : ['m', 'n', 'o'],
        7 : ['p', 'q', 'r', 's'],
        8 : ['t', 'u', 'v'],
        9 : ['w','x','y','z']
    }
    
    let ret = [];
    
    for (let i = 0;i<digits.length;i++) {
        const digit = digits.charAt(i);
        ret = combination(ret, map[digit]);
    }
    
    return ret;
    
};

function combination(strArrayA, strArrayB) {
    if (strArrayA.length === 0) {
        return strArrayB;
    }
    
    const ret = [];
    
    for (let i =0;i<strArrayA.length;i++) {
        const strA = strArrayA[i];
        for (let j =0;j < strArrayB.length;j++) {
            const strB = strArrayB[j];
            ret.push(`${strA}${strB}`);
        }
    }
    return ret;
}